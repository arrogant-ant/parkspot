<template lang="pug">
    .PSContainer#topNav
      b-navbar(id="top")
        template(slot='brand')
          b-navbar-item(v-lazyload tag="router-link" :to="{ path: '/' }")
            img(:data-url="minilogo.path" alt="logo.png" placeholder='ParkSpot' id="maximize" )
        template(slot="start")
          b-navbar-item(v-lazyload tag="router-link" :to="{ path: '/' }")
            img(:data-url="minilogotext.path" alt="logotext.png" placeholder="ParkSpot" id="maximize")
        template(slot='end')
          b-navbar-item.a(:href="`https://play.google.com/store/apps/details?id=com.parkspot.maya_nagri&utm_source=parkspot.in&utm_campaign=website`"  target="_blank" v-lazyload)
            img(:data-url="gplay" alt='Get it on Google Play' placeholder="ParkSpotPlaystore" id="maximize")
          b-navbar-item(tag='div')
            .buttons(v-if="isLoggedIn()")
              b-navbar-item.button.is-warning(@click="logout()")
                strong Log Out
            .buttons(v-else)
              b-navbar-item.button.is-dark(@click="signupCardModal()")
                strong Sign Up
              b-navbar-item.button.is-warning(@click="loginCardModal()")
                strong Log In
      b-navbar.is-dark#mainNav
        template(slot='end')
          b-navbar-item(tag="router-link" :to="{ path: '/' }    ")
            | Home
          b-navbar-item(href="/#services")
            | Services
          b-navbar-item(href="/#team")
            | Team
          b-navbar-item(href="/#book")
            | Book
          b-navbar-item(href="/#contact")
            | Rent
          b-navbar-item(tag="router-link" :to="{ path: '/faq' }")
            | FAQs
          b-navbar-item(tag="router-link" :to="{ path: '/blog/eliminating-reason-for-traffic-jam' }")
            | Blog
          b-navbar-item(href="/#about")
            | About
          b-navbar-item(href="/#contact")
            | Contact Us
          b-navbar-item.is-hidden(tag="router-link" :to="{ path: '/portal' }")
            | Portal
          b-navbar-item.is-hidden(tag="router-link" :to="{ path: '/parkspot-near-you' }")
            | ParkSpot Near You	
        //-   b-navbar-item(tag="router-link" :to="{ path: '/atomic-design' }")
        //-     | Atomic design
</template>

<script>
import loginModalForm from '@/components/loginModalForm.vue';
import sigupModalForm from '@/components/signupModalForm.vue'

var timer = setInterval(function(){
		var main = document.getElementById("mainNav")
		var height = document.getElementById("topNav").offsetHeight
		if(window.scrollY > height){
			main.classList.add("is-fixed-top")
		}
		else{
			main.classList.remove("is-fixed-top")	
		}
	}, 100)
export default {
  name: 'PSNavbar',
  methods: {
		updateComponent(){
			console.log("refreshing component")
			this.$forceUpdate()
		},
		logout(){
			localStorage.removeItem("PSToken")
			this.updateComponent()
		},
		signupCardModal(){
			this.$buefy.modal.open({
				parent: this,
				component: sigupModalForm,
				hasModalCard: true,
				customClass: "signupModal signup",
				trapFocus: true
			})
		},
		loginCardModal() {
				console.log("hello")
                this.$buefy.modal.open({
                    parent: this,
                    component: loginModalForm,
                    hasModalCard: true,
                    customClass: 'login loginModal',
                    trapFocus: true,
					events: {
						"loggedInEvent": ()=>{
							this.updateComponent()	
						}	
					}
				})
    	},
		 isLoggedIn(){
			if(localStorage.getItem("PSToken") === null){
					console.log("no cookie")
					return false
			}
			else{
				console.log("cookie is ready to eat")
				return true
			}
		 }
	},
	data: function(){
		return {
			minilogotext: {path: require("@/assets/pstoptext.png")},
			minilogo: {path: require("@/assets/pstopmini.png")},
			gplay: require("@/assets/google-play-badge.png")
		}
	}
};
</script>

<style scoped>
.is-dark{
	background: #363636;
	color: #fff;
}
#minitext {
  width: 10%;
}
#top{
	height: 6rem;
}
#maximize{
	max-height: 4rem;
}
</style>
