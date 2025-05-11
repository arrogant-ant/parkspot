import { mayaClient } from "./api";

// Gets SAS URL to upload images
async function getSasUrl() {
    return mayaClient.get('sas-url');
}

// Uploads images to the SAS URL using a unique filename format (`namePrefix:epochTime.extension`)
async function uploadImages(Images, namePrefix) {
    console.log(Images, namePrefix);
    console.log("Inside upload images...", Images, namePrefix);
    namePrefix = `${namePrefix}`
    if (!namePrefix || typeof namePrefix !== 'string') {
        throw new Error("Error: namePrefix is required and must be a non-empty string.");
    }

    const sasUrl = await getSasUrl();
    if (sasUrl.ErrorCode) {
        return {
            success: false,
            DisplayMsg: sasUrl.DisplayMsg,
        };
    }

    const extensionMap = {
        'image/png': '.png',
        'image/jpeg': '.jpg',
        'image/heic': '.heic',
    };

    const [baseUrl, queryParams] = sasUrl.split('?');

    const uploadPromises = Images.map(async (img, index) => {
        const file = img.file;
      console.log("Uploading images...");
        // ✅ Validate file
        if (
            !file ||
            typeof file !== 'object' ||
            !(file instanceof File || file instanceof Blob) ||
            file.size === 0
        ) {
            console.log("Error while uploading file", file);
            console.warn(`Skipping invalid image at index ${index}:`, file);
            return {
                fileName: file?.name || `InvalidImage-${index}`,
                url: '',
                status: 'failed',
                error: 'Invalid or empty file.',
            };
        }
       console.log("Image in png");
        const epochTime = Date.now() + index;
        const extension = extensionMap[file.type] || '.png'; // default to .png
        const modifiedBase = `${baseUrl}/${namePrefix}:${epochTime}${extension}`;
        const uploadUrl = `${modifiedBase}?${queryParams}`;
       console.log("upload url", uploadUrl);
        return fetch(uploadUrl, {
            method: 'PUT',
            headers: {
                'x-ms-blob-type': 'BlockBlob',
                'Content-Type': file.type || 'application/octet-stream',
            },
            body: file,
        })
            .then((response) => {
                if (response.ok) {
                     console.log("getting response", response);
                    return {
                        fileName: file.name,
                        url: modifiedBase,
                        status: 'success',
                    };
                } else {
                    return response.text().then((errorText) => ({
                        fileName: file.name,
                        url: modifiedBase,
                        status: 'failed',
                        error: errorText,
                    }));
                }
            })
            .catch((err) => ({
                fileName: file.name,
                url: modifiedBase,
                status: 'failed',
                error: err.message,
            }));
    });

    const uploadResults = await Promise.all(uploadPromises);

    const failedUploads = uploadResults.filter(result => result.status === 'failed');

    if (failedUploads.length > 0) {
        return {
            success: false,
            DisplayMsg: `Some images failed to upload. Please retry.`,
            failedUploads,
        };
    }

    return {
        success: true,
        urls: uploadResults.map(result => result.url),
    };
}

// Converts HEIC to JPEG using heic2any
async function convertHEICtoJPEG(file) {
    try {
        const heic2any = await import('https://cdn.jsdelivr.net/npm/heic2any@0.0.3/+esm');
        const blob = await heic2any.default({
            blob: file,
            toType: 'image/jpeg',
        });
        return new File([blob], file.name.replace('.heic', '.jpg'), {
            type: 'image/jpeg',
        });
    } catch (err) {
        throw new Error('HEIC conversion failed: ' + err.message);
    }
}

export default {
    uploadImages,
    convertHEICtoJPEG,
};