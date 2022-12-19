import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import  './Customers.css';

const Customers = () => {
  const[list,setList] = useState([]);
  const getData = async()=>{
    let base = await fetch(`https://chargebee-customers-database.vercel.app/posts`);
    let base2 = await base.json();
    setList(base2)
    console.log(base2)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div style={{}} >
      
<<<<<<< HEAD
      <div className="cust1">
=======

      <div class="cust1">

>>>>>>> 70aa2370e7c7bca89b71e6c0182c441945bfcd62
      <Heading>Chargebee powers <br/>
      </Heading>
      <Heading> subscriptions for</Heading>
      <Heading>businesses for all sizes.</Heading>
      <Button size='lg' color="orange.500" borderColor="orange.500" borderRadius="0px" border="2px solid" marginTop="50px" variant='outline'>
    Sign up for free
  </Button>
  <Button  color="blue.500" variant='ghost'  marginTop="50px" marginLeft="20px"  >Talk to us!</Button>

      </div>
<<<<<<< HEAD
      <div className="cust2" >
        <div className="cust-left" > 
          <img className="study-com-logo"  src="https://webstatic.chargebee.com/assets/web/543/images/home/testimonial/cb-study.png" alt="study.com" />
          <p className='study-com-text'  >... Integration was easy and the <strong style={{fontStyle:"italic"}} >customer support provided was excellent. </strong> This is huge<br/>considering how deficient many players in the <br/> space are when... </p>
=======

      <div class="cust2" >
        <div class="cust-left" > 
          <img class="study-com-logo"  src="https://webstatic.chargebee.com/assets/web/543/images/home/testimonial/cb-study.png" alt="study.com" />
          <p class='study-com-text'  >... Integration was easy and the <strong style={{fontStyle:"italic"}} >customer support provided was excellent. </strong> This is huge<br/>considering how deficient many players in the <br/> space are when... </p>
>>>>>>> 70aa2370e7c7bca89b71e6c0182c441945bfcd62
         <div  >

         <img src="https://webstatic.chargebee.com/assets/web/543/images/case-study/voitek.jpeg" alt="Voitek" style={{width:"50px",borderRadius:"50%",height:"50px",}} />  <label> Voitek Sobieszczanski, Director of Finance &amp; Operations</label>
         </div>
          
        </div>
        <div>
<<<<<<< HEAD
      <Link to="/customers/readthestory" >  <img classNameName="white-board-image"  src="https://user-images.githubusercontent.com/107903370/207784031-af0dec8a-2de3-41ea-84e7-0302734fc81d.png" alt="whiteBoard" /> </Link>
=======

      <Link to="/customers/readthestory" >  <img class="white-board-image"  src="https://user-images.githubusercontent.com/107903370/207784031-af0dec8a-2de3-41ea-84e7-0302734fc81d.png" alt="whiteBoard" /> </Link>
>>>>>>> 70aa2370e7c7bca89b71e6c0182c441945bfcd62
        </div>
      </div>
      <div className="cust3"  >
     <div className='cust3-image' >   <img src="https://webstatic.chargebee.com/assets/web/543/images/customers/logos/freshworks-light-bg.png" alt="freshworks" width="140" style={{height:"30px"}} /> </div>
       <div classNameName='cust3-image' > <img src="https://www.chargebee.com/static/resources/customers/calendly.png" alt="freshworks" width="130"style={{height:"35px"}} /> </div>
      <div className='cust3-image' >  <img src="https://webstatic.chargebee.com/assets/web/543/images/customers/logos/linuxacademy-logo.png" alt="freshworks" width="182" style={{height:"40px"}} /> </div>
     <div className='cust3-image' >   <img src="https://webstatic.chargebee.com/assets/web/543/images/customers/logos/fujitsu.png" alt="freshworks" width="90" style={{height:"40px"}} /> </div>
      </div>

      <div className="cust4"  >
         <div>
          <img className='freskdesk-logo'  src="https://user-images.githubusercontent.com/107903370/207796339-a2fcc3c2-c22d-4b33-bd55-898c2da864cc.png" alt="freshDesk" />
         </div>
         <div className='cust4-right'  >
          <img className='freedom-logo' src="https://www.chargebee.com/static/resources/customers/freedom-logo.png" width="120" alt="freedom" style={{marginBottom:"30px"}} />
          <div  >
          <div className="freedom-text" >
          <Text fontSize='22px'> We didn't have another choice,  we  never had to choose between  Chargebee and another provider. Chargebee was the clear winner.</Text>
          </div>

          <div style={{display:"flex",margin:"0px",alignItems:"center"}} >
         <img src="https://webstatic.chargebee.com/assets/web/543/images/case-study/freedom-fred.png" alt="Voitek" style={{width:"50px",borderRadius:"50%",height:"50px",margin:"20px"}} />  <label>Fred Stutzman, CEO, Freedom</label>
         </div>

          </div>
         </div>
      </div>

      <div className="cust5"  >
     <div className='cust5-image' >  <img src="https://www.chargebee.com/static/resources/customers/percona.png" alt="percona" width="140" style={{height:"30px"}} /> </div> 
     <div className='cust5-image' >   <img src="https://www.chargebee.com/static/resources/customers/cosmos.png" alt="cosmos" width="100"style={{height:"35px"}} /> </div>
     <div className='cust5-image' >       <img src="https://www.chargebee.com/static/resources/customers/freedom-logo.png" alt="freshworks" width="182" style={{height:"40px"}} /> </div>
     <div className='cust5-image' >   <img src="https://www.chargebee.com/static/resources/customers/crew.svg" alt="freshworks" width="90" style={{height:"40px"}} />  </div>
     <div className='cust5-image' >   <img src="https://www.chargebee.com/static/resources/customers/gigwell.png" width="150" alt="gigwell" /> </div>
      </div>
      <div className="cust6" style={{display:"flex",justifyContent:"center",width:"755px",height:"415px",margin:"auto"}} >
      
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/R9XgyoLQ9qw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="cust7"  >
        {list.map((el)=>{
          return<div className='cust-list' key={el.id} style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",padding:"20px",borderRadius:"5px"}} >
            <img src={el.source} alt={el.id} style={{width:"180px",margin:"15px"}} />
            <div  style={{margin:"10px"}} > <Text fontSize='18px' color='navyBlue' as="lb" style={{}} > {el.text} </Text> </div>

          </div>
        })}
      </div>
    </div>
  )
}

export default Customers