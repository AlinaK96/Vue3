Vue.component('Timer',{
	template: `
    <div>
        <div v-show ="statusType !== 'expired'">
            <div class="day">
            <span class="number">{{ days }}</span>
            <div class="format">{{ wordString.day }}</div>
            </div>
            <div class="hour">
            <span class="number">{{ hours }}</span>
            <div class="format">{{ wordString.hours }}</div>
            </div>
            <div class="min">
            <span class="number">{{ minutes }}</span>
            <div class="format">{{ wordString.minutes }}</div>
            </div>
            <div class="sec">
            <span class="number">{{ seconds }}</span>
            <div class="format">{{ wordString.seconds }}</div>
            </div>
        </div>
        <div class="message">{{ message }}</div>
        <div class="status-tag" :class="statusType">{{ statusText }}</div>
    </div>`,
    props: ['starttime','endtime','trans'] ,
    data: function(){
        return{
            timer:"",
            wordString: {},
            start: "",
            end: "",
            interval: "",
            days:"",
            minutes:"",
            hours:"",
            seconds:"",
            message:"",
            statusType:"",
            statusText: "",
    
        };
    },
    created: function () {
        this.wordString = JSON.parse(this.trans);
    },
    mounted(){
        this.start = new Date(this.starttime).getTime();
        this.end = new Date(this.endtime).getTime();

        this.timerCount(this.start,this.end);
        this.interval = setInterval(() => {
            this.timerCount(this.start,this.end);
        }, 1000);
    },
    methods: {
    timerCount: function(start,end){

        let now = new Date().getTime();

        let distance = start - now;
        let passTime =  end - now;

        if(distance < 0 && passTime < 0){
            this.message = this.wordString.expired;
            this.statusType = "expired";
            this.statusText = this.wordString.status.expired;
            clearInterval(this.interval);
            return;

        }else if(distance < 0 && passTime > 0){
            this.calcTime(passTime);
            this.message = this.wordString.running;
            this.statusType = "running";
            this.statusText = this.wordString.status.running;

        } else if( distance > 0 && passTime > 0 ){
            this.calcTime(distance); 
            this.message = this.wordString.upcoming;
            this.statusType = "upcoming";
            this.statusText = this.wordString.status.upcoming;
        }
    },
    calcTime: function(dist){

        this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }
    
}
});

new Vue({
    el: "#timer",
});