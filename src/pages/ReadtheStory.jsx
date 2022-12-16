import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

const ReadtheStory = () => {
  return (
    <div style={{marginTop:"50px"}} >
        <div class="readstory1" style={{display:"flex",padding:"100px 180px"}} >
             <div class="readstory1-left" >
                <img style={{width:"600px",borderRadius:"15px"}}  src="https://user-images.githubusercontent.com/107903370/207987462-b6496557-b98e-47fb-804f-74f283a39755.jpg" alt='whiteboard' />
                <div  style={{paddingRight:"250px",paddingLeft:"80px",fontSize:"17px",position:"relative",top:"-150px"}} >
                <Text color="white" >A mortgage-CRM that helps Loan Officers and their teams systematize the mortgage process and cultivate relationships with their partners in the real estate space.</Text>
                </div>
             </div>
             <div  class="readstory1-right"  >
                <div style={{position:"relative",top:"50px"}} >
                <img width="200" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"20px 15px",borderRadius:"5px",position:"relative",left:"-180px",zIndex:"1"}} src="https://images.ctfassets.net/a7hvy8sclsq6/2Fi8riH5IgVX4alX01PxSx/01133d776df40d330b7765f632b30e4e/Whiteboard_CRM-logo.png" alt='whiteboard-logo' />
                <Heading>
                How Whiteboard reduced Churn by 100% using Chargebee
                </Heading>
                <Text fontSize="20px" style={{paddingTop:"10px"}} >And increased their MRR by 35% with improved billing operations</Text>
                </div>
             </div>
        </div>
        <div class="readstory2" style={{display:"flex",padding:"100px 250px",justifyContent:"center"}} >
                <div style={{width:"600px"}} >
                <div style={{width:"188px",backgroundColor:"gold",height:"5px",position:"relative",top:"-5px"}} ></div>
                <Text as='b' fontSize="20px" style={{position:"relative",top:"-30px"}} > Operational Hassles </Text> <br/>
               
                <b style={{color:"gray"}} >Operational nightmare on customer retention <br/> and revenue recovery</b>
               <div  >
               <Text>
                Whiteboard couldn’t streamline operations around payment failures with inconsistent policies around deactivations and cancelations.
                </Text>
               </div>
                </div>
                <div style={{width:"1px",backgroundColor:"gray",height:"100px"}} ></div>
                <div  style={{width:"600px"}}>
                   
                <div style={{width:"150px",backgroundColor:"gold",height:"5px",}} ></div>
                <Text as='b' fontSize="20px" style={{position:"relative",top:"-25px"}} > After Chargebee </Text><br/>
                <b>Better dunning for improved revenue recovery and reduced churn</b>
               
                </div>

        </div>
    </div>
  )
}

export default ReadtheStory