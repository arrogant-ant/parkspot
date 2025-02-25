<template>
    <div class="custom-card">
        <AtomHeading :level="'h4'" class="mb-3">
            {{ featureHeading }}
        </AtomHeading>
        <AtomParagraph :variation="'small'">
            <slot></slot>
        </AtomParagraph>
    </div>
</template>

<script>
import AtomHeading from '../atoms/AtomHeading.vue';
import AtomParagraph from '../atoms/AtomParagraph.vue';
export default {
    name: 'MoleculeFeatureCard',
    components: {
        AtomHeading,
        AtomParagraph,
    },
    props: {
        featureHeading: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
.custom-card {
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 133, 173, 0.5);
    border-radius: var(--border-default);
    border: 2px dashed var(--secondary-color);
    padding: 2rem 3rem;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.custom-card:hover,
.custom-card:focus {
    border: 2px solid transparent;
    color: var(--secondary-color);
    background-color: var(--primary-color);
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 133, 173, 0.7);
    outline: none;
}

.custom-card:focus-within {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}
</style>
