const example = {
computed: {
	n(){
	},
	qr(){
    const qr = new QRious({
        value: this.message,
        size: 1000,
        foreground: '#414141' });
      console.log(qr);
	  this.qrdata=qr.toDataURL('image/png');
      return qr.toDataURL('image/png');
    }
},
          methods: {
            clickMe() {
                this.$buefy.notification.open(this.message)
            },
            myencrypt(){
              //add by zy
             key=this.key.toString();
	        	 source=this.message.toString();
             this.message=CryptoJS.AES.encrypt(source,key).toString();
			 this.qrdata=this.qr2(this.message)
            },
            mydecrypt(){
             key=this.key.toString();
	        	 source=this.message.toString();
              this.message=CryptoJS.AES.decrypt(source,key).toString(CryptoJS.enc.Utf8);
            } ,
		qr2(input){
		const qr = new QRious({
			value: input,
			size: 1000,
			foreground: '#414141' });
		  console.log(qr);
		  return qr.toDataURL('image/png');
    }
		},
    data() {
        return {
            message:"Hello",
            key:"Key",
			qrdata:""
        }
    }
}

            const app = new Vue(example)
            app.$mount('#app')
