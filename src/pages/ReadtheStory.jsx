import { Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import  './ReadtheStory.css'
const ReadtheStory = () => {
  return (
    <div style={{marginTop:"50px"}} >
        <div class="readstory1"  >
             <div class="readstory1-left" >
                <img class="white-Board"   src="https://user-images.githubusercontent.com/107903370/207987462-b6496557-b98e-47fb-804f-74f283a39755.jpg" alt='whiteboard' />
                <div  style={{paddingRight:"250px",paddingLeft:"80px",fontSize:"17px",position:"relative",top:"-150px"}} >
                <Text color="white" >A mortgage-CRM that helps Loan Officers and their teams systematize the mortgage process and cultivate relationships with their partners in the real estate space.</Text>
                </div>
             </div>
             <div  class="readstory1-right"  >
                <div  style={{position:"relative",top:"50px"}} >
                <img  width="200" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"20px 15px",borderRadius:"5px",position:"relative",left:"-180px",background:"white"}} src="https://images.ctfassets.net/a7hvy8sclsq6/2Fi8riH5IgVX4alX01PxSx/01133d776df40d330b7765f632b30e4e/Whiteboard_CRM-logo.png" alt='whiteboard-logo' />
                <Heading>
                How Whiteboard reduced Churn by 100% using Chargebee
                </Heading>
                <Text fontSize="20px" style={{paddingTop:"10px"}} >And increased their MRR by 35% with improved billing operations</Text>
                </div>
             </div>
        </div>
        <div class="readstory2" >
                <div style={{padding:"30px"}} >
                <div style={{width:"188px",backgroundColor:"gold",height:"5px",position:"relative",top:"-5px"}} ></div>
                <Text as='b' fontSize="20px" style={{position:"relative",top:"-30px"}} > Operational Hassles </Text> <br/>
               
                <b style={{color:"gray"}} >Operational nightmare on customer retention <br/> and revenue recovery</b>
               <div  >
               <Text style={{padding:"10px 0px"}} >
                Whiteboard couldn’t streamline operations around <br/>  payment failures with inconsistent policies around <br/> deactivations and cancelations.
                </Text>
                <b style={{color:"gray"}} >Unreliable and incorrect SaaS metrics</b>

                <Text style={{padding:"10px 0px"}} >
                Whiteboard was not anchored on the right SaaS <br/> success metrics (MRR, ARR, Churn, etc.)
                </Text>
               </div>
                </div>
                
                <div  style={{padding:"30px"}}>
                   
                <div style={{width:"150px",backgroundColor:"gold",height:"5px",}} ></div>
                <Text as='b' fontSize="20px" style={{position:"relative",top:"-25px"}} > After Chargebee </Text><br/>
                <b  style={{color:"gray"}}>Better dunning for improved revenue recovery <br/> and reduced churn</b>
                <Text style={{padding:"10px 0px"}} >
                Chargebee’s Dunning helped standardize processes <br/> around payment failures, improving MRR by 35% <br/> and reducing churn by 100%.
                </Text>
                <b style={{color:"gray"}} >RevenueStory for accurate subscription analytics</b>

                <Text style={{padding:"10px 0px"}} >
                RevenueStory made it pretty easy to put critical <br/> measurements in place. MRR, ARR, Churn, <br/> Expansion, etc. are all at their fingertips every day.
                </Text>
                </div>

        </div>
        <div class="readstory3" style={{margin:"auto",textAlign:"center"}} >
                <Heading size='lg'>
                See how Chargebee is a trusted <br/> partner in 4500+ growth stories
                </Heading> <br/> <br/>
                <Button colorScheme='facebook' size='lg'> Get a Demo</Button>
        </div>

        <div class="readstory4" style={{display:"flex",padding:"100px 180px"}} >
          <div style={{width:"680px",paddingRight:"100px"}} >
            <Heading>The Problem</Heading> <br/>
            <Text style={{fontSize:"18px"}} >
            Having started with PayPal to process payments, Whiteboard had to rely heavily on manual billing, which restricted them from further enhancing their customer onboarding experience.
            </Text> <br/>
            <Text style={{fontSize:"18px"}}>Soon, they moved to Braintree for processing recurring payments and managing their subscriptions. Braintree lacked the solid automation to recover revenue from payment failures and send email communications for follow-ups. With inconsistent policies surrounding deactivation and cancelation, a member of the Whiteboard team had to spend hours chasing customers for payments, every week — not the best use of their time, which would otherwise be used for onboarding customers.</Text> <br/>
            <Text style={{fontSize:"18px"}}>
            Whiteboard also found that they were not anchored to the right SaaS success metrics. In their early days, the acquisition of new customers was a bigger focal point than retention. “Anchoring to traditional, transactional metrics (like new sales) made us short-sighted. We weren't paying enough attention to churn or expansion or recurring revenue,” Ben Laughter, (former) VP, Customer Success & Operations at Whiteboard said.
            </Text> <br/>
            <br/>

            <Heading>The Solution</Heading> <br/>
            <Text style={{fontSize:"18px"}} >
            One of Whiteboard’s biggest fears, while evaluating a billing solution, was data quality while migrating existing customers into the system. Double billing existing customers and sending them incorrect notifications were some of the reasons that made Whiteboard averse to migration risks.
            </Text> <br/>
            <Text style={{fontSize:"18px"}}>But Chargebee’s implementation and migration specialists ensured that the transition was smooth. While onboarding all new customers via Chargebee instead of Braintree, Whiteboard also spent time building out their preferences, email templates, user profiles, product catalogs, and coupons.</Text> <br/> <br/>

            <Heading>The Pay-off</Heading> <br/>
            <Text style={{fontSize:"18px"}} >
            The automated emails that go out from Chargebee for all manner of events including upcoming and successful renewals, quotes, and subscription changes have helped Whiteboard stay on top of all their customers, resulting in great financial relationships.
            </Text> <br/>
            <Text style={{fontSize:"18px"}}>Chargebee’s Revenue Recovery Suite was another significant contributor to Whiteboard’s growth. The dunning tools helped them standardize and automate the vast majority of their processes when payments fail, reducing churn by almost 100%.</Text> <br/>
            <Text style={{fontSize:"18px"}}>Chargebee’s RevenueStory also made it easy to anchor their critical SaaS metrics such as MRR, ARR, Churn, Expansion, etc, because of which, they were able to better understand the need for quality sales and onboarding, and for building stronger customer relationships.</Text> <br/> <br/>
            <div style={{textAlign:"center"}} >
                    <Text fontSize="22px" >We decided on Chargebee largely because of the flexibility and support offered where importing existing data was concerned. It took some time and consultation, but Chargebee made it pretty easy and did a great job of mitigating risk as we migrated.</Text>
                    <div style={{padding:"25px"}} >
                    <Text as='b' fontSize="xl" style={{color:"#500AD2"}} >Ben Laughter</Text>
                    </div>
            </div>
           
          </div>
          <div>
             <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"350px",padding:"20px 15px",borderRadius:"5px",position:"sticky",top:"100px"}} >
             <div style={{width:"100px",backgroundColor:"gold",height:"5px",}} ></div>
                <Text as='b' fontSize="20px" style={{position:"relative",top:"-25px"}} >Tech Stack </Text><br/>
                <Text style={{fontSize:"16px",color:"gray"}} >Finance</Text>
                <b>Braintree, Stripe, QuickBooks</b> <br/> <br/>
                <Text style={{fontSize:"16px",color:"gray"}} >Sales & Marketing</Text>
                <b>Insightly, HubSpot</b> <br/> <br/>
                <Text style={{fontSize:"16px",color:"gray"}} >Operations</Text>
                <b>Zapier, Chargebee</b> <br/> <br/>
                <Text style={{fontSize:"16px",color:"gray"}} >Analytics</Text>
                <b>RevenueStory</b> <br/> <br/>
                <Text style={{fontSize:"16px",color:"gray"}} >Success</Text>
                <b>Intercom</b> <br/> <br/>

             </div>
          </div>
        </div>
        <div class="readstory5" style={{display:"flex",padding:"100px 180px"}} >
                 <div>
                  {/* <img src="" /> */}
                 </div>
        </div>
    </div>
  )
}

export default ReadtheStory