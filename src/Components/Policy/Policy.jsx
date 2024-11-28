import React from 'react'
import './Policy.css'

const Policy = () => {
  return (
    <div className='policy-container'>
                    <h1 className='heading'>Delivery Policy</h1>
         <div className="policy">
            <p><span>Shipping Methods and Costs</span> <br /> <br />
            We offer worldwide shipping. Costs for international shipping shall be notified via email before the order is processed and final payment made. Customs clearance if any, is required at the international destination will have to be undertaken by the customer and is not our responsibility. <br/>For more information, please contact our customer care service at <span><a href="mailto:enquiry@spiceforsoul.in">enquiry@spiceforsoul.in</a> or +91-9074882473</span></p>
         </div>
           
         <div className="policy">
            <p><span>Important Information</span><br /><br />
            Estimated delivery times are to be used as a guide only and commence from the date of dispatch. We are not responsible for any delays caused by destination customs clearance processes. We are unable to redirect orders once items have been dispatched. All orders require a signature upon receipt.</p>
         </div>

         <div className="policy">
            <p><span>When Do We Deliver</span><br /><br />
            All domestic orders to metros will take 2-3 days and rest of India will be 3-4 days for delivery from the date of dispatch. International orders take a minimum of 7 to 10 days for delivery from the date of dispatch. Further information on the order status can be provided by our customer care upon request.</p>
         </div>

         <div className="policy">
            <p><span>Shipping</span><br /><br />
            Shipping is offered as Rs 50.00 on order below Rs 500 & Free Shipping above Rs 500 to customers in India. <span>For customers outside India, shipping costs will be determined separately.</span></p>
         </div>

         <br />
         <br />

         <h3>Taxes & Duties</h3>

         <div className="policy">
            <p><span>For Indian Customers</span><br /><br />
            Product Prices displayed are inclusive of all taxes and duties.</p>
         </div>

         <div className="policy">
            <p><span>For Overseas Customers</span><br /><br />
            Most countries are shipped to on a DDU (Delivery Duty Unpaid) basis, which means product prices displayed are exclusive of all import duties. As the recipient, you are liable for all import duties, customs and local sales taxes levied by the country you are in, payment of these at the time of delivery is necessary to release your order from customs on arrival. For more information, please write to us on <span><a href="mailto:enquiry@spiceforsoul.in">enquiry@spiceforsoul.in</a></span></p>
         </div>
    </div>
  )
}

export default Policy
