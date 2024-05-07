let App = {
    //  ========== Data =========;
    data : function(){
        return {
            products :products,
            path : "product",
            cart : [],   
            
        }
    },
    //  ========== Methods =========;
    methods:{
        //  ============ [FUN 1] ============;
        addToCart : function(product){
            
            // ============= [step one ]======;
           let check = this.cart.some(function(e){
            return e.pro.id == product.id
           })
            // ============= [step two ]======;
            if(check== false){
                this.cart.push({
                    pro : product,
                    count : 1,
                })
            }else {
                let addedPro = this.cart.find(function(e){
                    return e.pro.id == product.id
                   })
                   addedPro.count ++;

            }
            product.stock --;

           
        },
        //  ============ [FUN 2] ============;
        deleteFromCart : function(item){
            let indexPro = this.cart.findIndex(function(e){
                return e.pro.id == item.pro.id
            })
            
           this.cart.splice(indexPro , 1);

          let deletedPro=  this.products.find(function(e){
            return e.id == item.pro.id
           })
           deletedPro.stock+=item.count

            
        },
        //  ============ [FUN 3] ============;

    }
};

Vue.createApp(App).mount("#App")