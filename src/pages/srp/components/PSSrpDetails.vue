<template lang="pug">
	section.cont
		br
		.hero.is-halfheight
			p.title.has-text-left
				| Results:
			b-loading(v-model="isLoading")
			.columns.is-vcentered(v-if="isModalOpen")
				.column
					img(:src="nothingImage")
				.column
					p.has-text-left.is-size-4
						| No parking sites found in the given location !
			.containers(v-else v-for="(site, i) in PSSites")
				.rcorner
					.columns.is-vcentered
						.column.is-half
							img.defImage(v-if="site.cropImage" :src="site.imageURI")
							img(v-else :src="site.imageURI")
						.column.is-half
							.grid-container
								.tname.item1
									p.has-text-left.is-size-7
										| {{site.type}}
									p.has-text-left.is-size-11
										strong
											| {{site.name}}
									p.has-text-left.is-size-9
										| {{site.address}}
								//- .Amount.has-text-left.is-size-6
								//- 		strong
								//- 			| Amount: 
								//- 		| &#x20b9; {{site.amount}}
								.vehicleType.has-text-left.is-size-6.item2.mypad
									strong
										| Vehicle Type: 
									| {{site.vehicleType}}
								.slotsAvailable.has-text-left.is-size-6.item3
									strong
										| Slots Available: 
									| {{site.slotsAvailable}}/{{site.totalSlots}}
								.has-text-left.grid-items.item4
									strong Rate: &#x20b9; 
									|{{site.rate}}/{{site.unit}}
								.has-text-left.grid-items.item5
									strong Distance: 
									|{{site.distance}} Km
								.has-text-left.grid-items.item6
									strong Rating: 
									|{{site.rating}}/5
								.floatright.grid-items.item7
									a(id="srpBook" class="button is-warning" v-on:click="onBook(site.ID)") Book
										

				br

				br
				br

</template>
<script>
import EmptySitesModal from '@/pages/srp/components/EmptySitesModal.vue';
export default{
	name: "PSSrpDetails",
		
	data: function(){
		return {
			newPSSite: require("@/assets/psites/new.png"),
			PSSites: [],
			isLoading: true,
			isModalOpen: false,
			nothingImage: require("@/assets/stocks/emptyc.png")			
		}	
	},
	mounted(){
		this.fillSites(this)
		this.getLatLng()
	},
	methods: {
		openEmptyModal(){
				if(!this.isModalOpen){
					this.isModalOpen = true
					console.log("opening empty sites modal")
                	this.$buefy.modal.open({
                	    parent: this,
                	    component: EmptySitesModal,
                	    hasModalCard: true,
                	    customClass: 'custom-class custom-class-2',
                	    trapFocus: true
					})
				}
		},
		fillSites(master){
			this.$root.$on("sitesReady", function(sites){
				master.isLoading = false
				if(sites.length === 0){
					console.log("no sites found", "opening modal")
					master.openEmptyModal()
				}
				for(var i=0;i<sites.length;i++){
					master.PSSites.push(sites[i])	
				}
			})
		},
		getLatLng(){
			return new Promise(function(resolve, reject){
				navigator.geolocation.getCurrentPosition(function(data){
					var lat = data.coords.latitude
					var lng = data.coords.longitude
					if(lat === null && lng === null){
						reject("failed to get current position")	
					}
					else{
						resolve([lat, lng])
					}
				})	
			})
		},
		calcDist(lat1, lat2, lng1, lng2,mode="K"){
			//returns distance between two lat longs in meters
			var phi1 = lat1 * Math.PI/180
			var phi2 = lat2 * Math.PI/180
			var deltaPhi = (lat2 - lat1) * Math.PI/180
			var deltaLambda = (lng2 - lng1) * Math.PI/180
			var a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
					Math.cos(phi1) * Math.cos(phi2) *
					Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2)
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
			var radius = 6371e3
			switch(mode){
				case "m":
					return radius * c
				case "K":
					return (radius * c)/1000
				case "M":
					return (radius * c) * 0.00062137
				default:
					return 0
			}
		},
		filterDist(lat, lng){
			return this.sites.filter(function(elem){
				return distance(lat, elem.latLng[0], lng, elem.latLng[1]) < 60
			})	
		},
		onBook(index){
			console.log("clicked    "+index)
			this.$emit('on-book',index)
		}
	}
}
</script>
<style scoped>
.rcorner{
	/*border-radius: 25px;*/
	border: 0.5px solid black;
	padding: 10px;
	box-shadow: 5px 10px 18px black; /*hsl(48, 100%, 67%);*/
}
.cont{
	width: 80%;
	margin: 0 auto;
}
.containers{
	width: 80%;
	margin: 0 auto;
}
.resultimg{
	border-radius: 25px;
	width: 100%;
}
.floatright{
	float: right;
	padding-right: 10%;
	padding-bottom: 5%;
}
.grid-container{
	display: grid;
	align-items: center;
	grid-template: 'myArea myArea myArea'
	'myArea2 myArea2 myArea2'
	'myArea3 myArea3 myArea3'
	'myArea4 myArea4 myArea4'
	'myArea5 myArea6 myArea7';
}
.defImage{
	height: 200px;
}
.emptyHandle{
	display: flex;
}
.grid-items{
	grid-column-gap: 100px;
}
.item1{
	grid-area: myArea;
}
.item2{
	grid-area: myArea2;
}
.item3{
	grid-area: myArea3;
}
.item4{
	grid-area: myArea4;
}
.item5{
	grid-area: myArea5;
}
.item5{
	grid-area: myArea6;
}
.mypad{
	margin-top: 5px;
}

</style>
