import axios from "axios";

const token = localStorage.getItem('token')

export const createOrder = (Razorpay) => {
    return async(dispatch) => {
       
        try {
            const response = await axios.get(`http://localhost:4000/purchase/premiummembership`, { headers: {"Authorization" : token } });
            console.log(response);
            var options = {
                "key": response.data.key_id,
                "order_id": response.data.response.id,
                "handler": async function(response) {
                    await axios.post('http://localhost:4000/purchase/updatetransactionstatus', {
                        order_id: options.order_id,
                        payment_id:response.razorpay_payment_id, 
                }, { headers: {"Authorization" : token } }) 
                   alert('You are Premium User Now')
                }
            }
            const rzp1 = new Razorpay(options);
            rzp1.open();

            rzp1.on('payment.failed', function(response){
                console.log(response)
                alert('Something went wrong');
            })
        }
    catch(error) {
                console.log(error)
            
        };
    };
}
