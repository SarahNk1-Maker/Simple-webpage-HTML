import {
  Body,
  Container,
  Html,
  Head,
 Button,
  Text,
  Tailwind,
  Hr,
  Img,
  Heading,
  Link,
  Column,
  Row,
  Section
  
} from "@react-email/components";
import * as React from "react";
import { IonIcon } from '@ionic/react';
import { flashOutline } from 'ionicons/icons';
import { flash } from 'ionicons/icons';


// Define the email component
const email = () =>{
  return(
    <Html>
   
      <Head></Head>
      <Tailwind>
         {/* Blue Guardian Logo */}
        <Body className="bg-white my-12 mx-auto font-sans">
        <Img className=" mx-auto w-24" src="https://www.blueguardian.ca/static/media/logo.484c090b87757e4a7a16.png"></Img>
          <Container className="p-8 rounded-lg shadow-lg">
       
          <Heading className=" text-xl pt-4">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Heading>
          <Heading className=" text-xl pt-4"> Your Weekly Wellness update </Heading>
          <Text className="text-lg font medium text-grey-70">You certainly have a way with words! Check out the details below.</Text>
          <Button></Button>
        </Container>

        <Container className="p-8 rounded-lg shadow-lg">
          <Heading className=" text-xl pt-4">Blue Guardian Streaks</Heading>
          <Heading className=" text-xl pt-4">12 Weeks</Heading>
          <Img className="w-6" src="Lightning Bolt.png"></Img>
          <svg xmlns="http://www.w3.org/2000/svg" width="103" height="15" viewBox="0 0 103 15" fill="none">
  <rect x="0.347168" y="0.295715" width="102.555" height="14.4086" rx="7.20429" fill="#E3E6EC"/>
  <rect x="0.347168" y="0.295715" width="82.2137" height="14.4086" rx="7.20429" fill="#3992EF"/>
</svg>

        </Container>
        <Container className="p-8 rounded-lg shadow-lg">
          <Img className=" float-right mx-auto w-24" src="undraw_well_done_re_3hpo 1.png"></Img>
          <Heading className=" text-xl pt-4">Tone Detection </Heading>
          <Text className="text-lg font medium text-grey-70"> Tone Detection helps Blue Guardian understand your feelings so it responds with personalized  support tailored to your emotions.</Text>
          <Button></Button>
        </Container>
        <Container className="p-8 rounded-lg shadow-lg">
          <Img className=" float-right mx-auto w-24" src="undraw_good_team_re_hrvm 2.png"></Img>
          <Heading className=" text-xl pt-4">Cognitive Distortions </Heading>
          <Text className="text-lg font medium text-grey-70">Cognitive distortions are a bias in your brain that tricks you into believing that things are worse than they are. </Text>
          <Button></Button>
        </Container>
        <Container className="p-8 rounded-lg shadow-lg">
          <Img className=" float-right mx-auto w-24" src="undraw_team_up_re_84ok 1.png"></Img>
          <Heading className=" text-xl pt-4">Premium Insights </Heading>
          <Text className="text-lg font medium text-grey-70"> Unlock deeper insights into your mental health journey. Upgrade to Premium to access personalized analytics and more </Text>
          <Button></Button>
        </Container>
        <Container className="p-1 rounded-lg shadow-lg bg-sky-400">
        
          <Heading className=" text-xl pt-4">Your Support Circle(4/5) </Heading>
          <Text className="text-lg font medium text-grey-70"> Invite a new buddy to make your circle complete </Text>
        </Container>
       
        
        
        <Container className="grid grid-cols-4 gap-4 p-20 rounded-lg shadow-lg">

{/* Friend 1 */}
<Section>
  <Row>
<Column align="center" className=" mt-10 w-16 h-16 flex-shrink-0 rounded-lg bg-white shadow-md border-solid border-0.773 border-indigo-white boxed" style={{ borderRadius: '9.165px', background: '#FFF', boxShadow: '0px 3.666px 3.666px 0px rgba(0, 0, 0, 0.05)' }}>
    <Img className="h-20 w-20 rounded-full" src="https://s3-alpha-sig.figma.com/img/b42a/ef7c/2a1b6371738a72de5348abd11b356f1b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6kcUZck4j2Khj1PYYkVbnqe24TL90jMq5Tg-ax1wajMLnxR-PZHJU1bgN0LzMQPkqxQOG~QIUvBfUKiTmV0HKhydFGicyYwU-FUNdczmLQPdGEmd52vwwNIXB4HQsDCjss~uod7KJYigl8zVH3aeiRpoaiFw12bRN61t7uIAFheBS9PpCicFmPrDaZuOuhE0KmfZCvbrKi-piyH7xXZ0SNl~kpEiahm3B0sayz4~Q5tcxGqduB6UA7F-wNkKQ-LxCWb~FL-LMeebdfiYfcjZsgd4-cX37rtY1FdZdNHTaW-4g8pw1cNLz-~DBwy4hKkHJD~B859DlT47EXdwwIbFg__"></Img>
    <Text className="pl-4">Edward</Text>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" fill="yellow">
      <path d="M7.38796 0.709412C3.84654 0.709412 0.97876 3.58361 0.97876 7.12503C0.97876 10.6664 3.84654 13.5406 7.38796 13.5406C10.9358 13.5406 13.81 10.6664 13.81 7.12503C13.81 3.58361 10.9358 0.709412 7.38796 0.709412ZM10.1082 10.9744L7.39438 9.33842L4.68057 10.9744L5.39912 7.88849L3.00609 5.81624L6.16258 5.54679L7.39438 2.6341L8.62618 5.54037L11.7827 5.80983L9.38963 7.88207L10.1082 10.9744Z" fill="#FF9500"/>
    </svg>
    <Text className="text-yellow-500 hover:text-red-600">12</Text>
    <IonIcon icon={flashOutline} />
  </Column>
 
{/* Friend 2 */}

  <Column className="w-16 h-16 flex-shrink-0 rounded-lg bg-white shadow-md border-solid border-0.773 border-indigo-white boxed" style={{ borderRadius: '9.165px', background: '#FFF', boxShadow: '0px 3.666px 3.666px 0px rgba(0, 0, 0, 0.05)' }}>
    <Img className="h-20 w-20 rounded-full" src="https://s3-alpha-sig.figma.com/img/b42a/ef7c/2a1b6371738a72de5348abd11b356f1b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6kcUZck4j2Khj1PYYkVbnqe24TL90jMq5Tg-ax1wajMLnxR-PZHJU1bgN0LzMQPkqxQOG~QIUvBfUKiTmV0HKhydFGicyYwU-FUNdczmLQPdGEmd52vwwNIXB4HQsDCjss~uod7KJYigl8zVH3aeiRpoaiFw12bRN61t7uIAFheBS9PpCicFmPrDaZuOuhE0KmfZCvbrKi-piyH7xXZ0SNl~kpEiahm3B0sayz4~Q5tcxGqduB6UA7F-wNkKQ-LxCWb~FL-LMeebdfiYfcjZsgd4-cX37rtY1FdZdNHTaW-4g8pw1cNLz-~DBwy4hKkHJD~B859DlT47EXdwwIbFg__"></Img>
    <Text className="pl-4">Edward</Text>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" fill="yellow">
      <path d="M7.38796 0.709412C3.84654 0.709412 0.97876 3.58361 0.97876 7.12503C0.97876 10.6664 3.84654 13.5406 7.38796 13.5406C10.9358 13.5406 13.81 10.6664 13.81 7.12503C13.81 3.58361 10.9358 0.709412 7.38796 0.709412ZM10.1082 10.9744L7.39438 9.33842L4.68057 10.9744L5.39912 7.88849L3.00609 5.81624L6.16258 5.54679L7.39438 2.6341L8.62618 5.54037L11.7827 5.80983L9.38963 7.88207L10.1082 10.9744Z" fill="#FF9500"/>
    </svg>
    <Text className="text-yellow-500 hover:text-red-600">12</Text>
    <IonIcon icon={flashOutline} />
  </Column>
</Row></Section>

{/* Friend 3 */}
<Section className="mt-8">
  <Row>
  <Column className=" mt 10 w-16 h-16 flex-shrink-0 rounded-lg bg-white shadow-md border-solid border-0.773 border-indigo-white boxed" style={{ borderRadius: '9.165px', background: '#FFF', boxShadow: '0px 3.666px 3.666px 0px rgba(0, 0, 0, 0.05)' }}>
  <Img className="h-20 w-20 rounded-full" src="https://s3-alpha-sig.figma.com/img/9073/6623/459b99c854c8d635e1138a18ea7475e7?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X22CiFegR7Wojy3UVyGwhcqNNpxAJH3Bmb1wPibJdV08gsV6EjidlX2b1PN3b-qvufwGQ9kX0P9uHxXTUVCdA7MHwLl4Yq40~sHFS6-A2RsKxD0XrBoUEjLiw3ML-8EOUGJTSKBWfqi1BeYyRWdvRtOYzoPLSwoMxSCrfwdPl5WEdn04UwWIF-y2U02BQ4jLYKKmaE1fKtmh3hok4v7TaDpJ5QPluJAcRTE3y36LoZLz4PJmrvdou581I2TB~N8gaJu-5fL2LF0aoPbT9SSBibAuAKIPxkpd8Db7FTi4Vng5qWYeAsmwVmuri8PrbrNBn-5~ihZxfmF2DEsA0tSHHw__"></Img>
    <Text className="pl-4">Emily</Text>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" fill="yellow">
      <path d="M7.38796 0.709412C3.84654 0.709412 0.97876 3.58361 0.97876 7.12503C0.97876 10.6664 3.84654 13.5406 7.38796 13.5406C10.9358 13.5406 13.81 10.6664 13.81 7.12503C13.81 3.58361 10.9358 0.709412 7.38796 0.709412ZM10.1082 10.9744L7.39438 9.33842L4.68057 10.9744L5.39912 7.88849L3.00609 5.81624L6.16258 5.54679L7.39438 2.6341L8.62618 5.54037L11.7827 5.80983L9.38963 7.88207L10.1082 10.9744Z" fill="#FF9500"/>
    </svg>
    <Text className="text-yellow-500 hover:text-red-600">12</Text>
    <IonIcon icon={flashOutline} />
  </Column>
{/* Friend 4 */}

  <Column className="gap-15 w-16 h-16 flex-shrink-0 rounded-lg bg-white shadow-md border-solid border-0.773 border-indigo-white boxed" style={{ borderRadius: '9.165px', background: '#FFF', boxShadow: '0px 3.666px 3.666px 0px rgba(0, 0, 0, 0.05)' }}>
    <Img className="h-20 w-20 rounded-full" src="https://s3-alpha-sig.figma.com/img/e8f1/c3d9/a223f58cb3839877fb390c0d58094e00?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FA32c1O~D3hHSbKmVRrjLvNbZd83Sx-5ZrzSOrOrHh~JGILBLAVQeQJ1V~ZuHw2NGOzf3jMNVUJGy2cw3d6j8RRQHPhtLo3iooV~w~GEU8W57yDMMVP~WdvNTZPVlU~V4MwE2vSd3jiiWhicSOZHyQoietougIitwSStpMJTgZyhq~Oni7R4rFwTkA1jfi0WUs-LcBwtBiM50ytG6fnidauzAp3LGJJxffSbXFKA6TruUjmHGr-CtN2QUjuKOCwVTmm0zYkNBrePafZTydAhXKgLLGwK4JYS6TgWLz~IPwYlIjqz2a-ujy4QmX-P4O2Uizi22vZclw7M7VrvxoSqyQ__"></Img>
    <Text className="pl-4">Elena</Text>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" fill="yellow">
      <path d="M7.38796 0.709412C3.84654 0.709412 0.97876 3.58361 0.97876 7.12503C0.97876 10.6664 3.84654 13.5406 7.38796 13.5406C10.9358 13.5406 13.81 10.6664 13.81 7.12503C13.81 3.58361 10.9358 0.709412 7.38796 0.709412ZM10.1082 10.9744L7.39438 9.33842L4.68057 10.9744L5.39912 7.88849L3.00609 5.81624L6.16258 5.54679L7.39438 2.6341L8.62618 5.54037L11.7827 5.80983L9.38963 7.88207L10.1082 10.9744Z" fill="#FF9500"/>
    </svg>
    <Text className="text-yellow-500 hover:text-red-600">12</Text>
    <IonIcon icon={flashOutline} />
  </Column>
</Row></Section>

        
<button href=""className="mt-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow">
  Invite more friends to join
</button>
</Container>

        <Container className="p-8 rounded-lg shadow-lg">
          <Img className="mx-auto w-24" src="Group 33191.png"></Img>
          <Heading className=" text-xl pt-4">Can AI be Used as a Therapist?</Heading>
          <Text className="text-lg font medium text-grey-70">The term AI therapist may sound imposing, prompting
the question...</Text>
<Hr class="h-px my-8 bg-gray-200 border-0 bg-gray-700"></Hr>
<Heading className=" text-xl pt-4">The Power of Customized AI Mental Health Support </Heading>
<Text className="text-lg font medium text-grey-70">That’s why one solution for everyone doesn’t work well...</Text>
<Hr class="h-px my-8 bg-gray-200 border-0 bg-gray-700"></Hr>
<Heading className=" text-xl pt-4">Navigating the Crossroads of Teen Mental Health</Heading>
<Text className="text-lg font medium text-grey-70">n the realm of uncertainty, having the right information is
like possessing a superpower.</Text>
</Container>


<Container className="p-8 rounded-lg shadow-lg">
          
                  <Column>
                    <Link href="/">
                      
                       <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                       <path d="M30.25 16.5C30.25 8.90613 24.0939 2.75005 16.5 2.75005C8.90608 2.75005 2.75 8.90613 2.75 16.5C2.75 23.3631 7.77818 29.0515 14.3516 30.083V20.4747H10.8604V16.5H14.3516V13.4707C14.3516 10.0247 16.4043 8.12114 19.5451 8.12114C21.0495 8.12114 22.623 8.38969 22.623 8.38969V11.7735H20.8892C19.1811 11.7735 18.6484 12.8334 18.6484 13.9208V16.5H22.4619L21.8523 20.4747H18.6484V30.083C25.2218 29.0515 30.25 23.3631 30.25 16.5Z" fill="#A8A8A8"/>
                     </svg>
                      
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4999 2.58337C11.9918 2.58337 11.5526 2.59801 10.1748 2.66087C8.79961 2.72374 7.86014 2.94246 7.03864 3.26193C6.17753 3.58571 5.3965 4.09376 4.75067 4.75165C4.09383 5.39674 3.58546 6.17722 3.26095 7.03876C2.9432 7.86026 2.72361 8.8006 2.66075 10.1758C2.59875 11.5527 2.58325 11.991 2.58325 15.5C2.58325 19.0091 2.59789 19.4474 2.66075 20.8252C2.72361 22.2003 2.94234 23.1398 3.26181 23.9613C3.58559 24.8224 4.09364 25.6035 4.75153 26.2493C5.39663 26.9061 6.17711 27.4145 7.03864 27.739C7.86014 28.0576 8.79961 28.2763 10.1748 28.3392C11.5526 28.4021 11.9918 28.4167 15.4999 28.4167C19.0081 28.4167 19.4473 28.4021 20.825 28.3392C22.2002 28.2763 23.1397 28.0576 23.9612 27.7382C24.8223 27.4144 25.6033 26.9063 26.2492 26.2484C26.906 25.6033 27.4144 24.8229 27.7389 23.9613C28.0575 23.1398 28.2762 22.2003 28.3391 20.8252C28.4019 19.4474 28.4166 19.0082 28.4166 15.5C28.4166 11.9919 28.4019 11.5527 28.3391 10.1749C28.2762 8.79974 28.0575 7.86026 27.738 7.03876C27.4137 6.17685 26.9054 5.39604 26.2483 4.75079C25.6032 4.09395 24.8227 3.58559 23.9612 3.26107C23.1397 2.94332 22.1994 2.72374 20.8242 2.66087C19.4473 2.59887 19.0089 2.58337 15.4999 2.58337ZM15.4999 4.91096C18.9487 4.91096 19.3577 4.92387 20.72 4.98587C21.9789 5.04357 22.6626 5.25282 23.1182 5.43107C23.7209 5.66443 24.1515 5.94515 24.6036 6.39637C25.0557 6.84846 25.3355 7.27901 25.5689 7.88179C25.7463 8.33732 25.9564 9.02104 26.0141 10.28C26.0761 11.6423 26.089 12.0513 26.089 15.5C26.089 18.9488 26.0761 19.3578 26.0141 20.7201C25.9564 21.979 25.7471 22.6628 25.5689 23.1183C25.3622 23.6793 25.0323 24.1869 24.6036 24.6037C24.1869 25.0325 23.6793 25.3624 23.1182 25.569C22.6626 25.7464 21.9789 25.9565 20.72 26.0142C19.3577 26.0762 18.9495 26.0891 15.4999 26.0891C12.0503 26.0891 11.6421 26.0762 10.2799 26.0142C9.02092 25.9565 8.3372 25.7473 7.88167 25.569C7.32062 25.3623 6.81304 25.0324 6.39625 24.6037C5.96757 24.1869 5.63772 23.6793 5.43095 23.1183C5.25356 22.6628 5.04345 21.979 4.98575 20.7201C4.92375 19.3578 4.91084 18.9488 4.91084 15.5C4.91084 12.0513 4.92375 11.6423 4.98575 10.28C5.04345 9.02104 5.2527 8.33732 5.43095 7.88179C5.66431 7.27901 5.94503 6.84846 6.39625 6.39637C6.81298 5.96758 7.32058 5.63771 7.88167 5.43107C8.3372 5.25368 9.02092 5.04357 10.2799 4.98587C11.6421 4.92387 12.0512 4.91096 15.4999 4.91096Z" fill="#A8A8A8"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4999 19.8099C14.934 19.8099 14.3735 19.6984 13.8506 19.4818C13.3277 19.2652 12.8526 18.9478 12.4524 18.5476C12.0522 18.1474 11.7347 17.6722 11.5181 17.1494C11.3016 16.6265 11.1901 16.066 11.1901 15.5C11.1901 14.9341 11.3016 14.3736 11.5181 13.8507C11.7347 13.3278 12.0522 12.8527 12.4524 12.4525C12.8526 12.0523 13.3277 11.7348 13.8506 11.5182C14.3735 11.3017 14.934 11.1902 15.4999 11.1902C16.643 11.1902 17.7392 11.6443 18.5475 12.4525C19.3557 13.2608 19.8098 14.357 19.8098 15.5C19.8098 16.6431 19.3557 17.7393 18.5475 18.5476C17.7392 19.3558 16.643 19.8099 15.4999 19.8099ZM15.4999 8.86087C13.7391 8.86087 12.0504 9.56036 10.8053 10.8054C9.56025 12.0505 8.86077 13.7392 8.86077 15.5C8.86077 17.2609 9.56025 18.9496 10.8053 20.1946C12.0504 21.4397 13.7391 22.1392 15.4999 22.1392C17.2608 22.1392 18.9495 21.4397 20.1945 20.1946C21.4396 18.9496 22.1391 17.2609 22.1391 15.5C22.1391 13.7392 21.4396 12.0505 20.1945 10.8054C18.9495 9.56036 17.2608 8.86087 15.4999 8.86087ZM24.0706 8.74032C24.0706 9.15654 23.9052 9.55572 23.6109 9.85003C23.3166 10.1443 22.9174 10.3097 22.5012 10.3097C22.085 10.3097 21.6858 10.1443 21.3915 9.85003C21.0972 9.55572 20.9318 9.15654 20.9318 8.74032C20.9318 8.32409 21.0972 7.92492 21.3915 7.6306C21.6858 7.33629 22.085 7.17094 22.5012 7.17094C22.9174 7.17094 23.3166 7.33629 23.6109 7.6306C23.9052 7.92492 24.0706 8.32409 24.0706 8.74032Z" fill="#A8A8A8"/>
</svg>
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
  <path d="M28.4166 4.48288V26.5172C28.4166 27.021 28.2165 27.5041 27.8602 27.8604C27.504 28.2166 27.0209 28.4167 26.5171 28.4167H4.48276C3.97898 28.4167 3.49583 28.2166 3.13961 27.8604C2.78338 27.5041 2.58325 27.021 2.58325 26.5172V4.48288C2.58325 3.9791 2.78338 3.49595 3.13961 3.13973C3.49583 2.7835 3.97898 2.58337 4.48276 2.58337L26.5171 2.58337C27.0209 2.58337 27.504 2.7835 27.8602 3.13973C28.2165 3.49595 28.4166 3.9791 28.4166 4.48288ZM10.1813 12.4608H6.38227V24.6177H10.1813V12.4608ZM10.5232 8.2819C10.5252 7.99454 10.4706 7.70959 10.3625 7.44334C10.2543 7.17708 10.0948 6.93473 9.89304 6.73012C9.69126 6.52551 9.45114 6.36265 9.18642 6.25084C8.92169 6.13903 8.63753 6.08046 8.35016 6.07847H8.28178C7.69739 6.07847 7.13694 6.31062 6.72372 6.72384C6.3105 7.13707 6.07835 7.69752 6.07835 8.2819C6.07835 8.86629 6.3105 9.42674 6.72372 9.83996C7.13694 10.2532 7.69739 10.4853 8.28178 10.4853C8.56917 10.4924 8.85513 10.4428 9.12333 10.3393C9.39153 10.2358 9.63671 10.0805 9.84486 9.88222C10.053 9.68394 10.2201 9.4466 10.3365 9.18374C10.4528 8.92089 10.5163 8.63767 10.5232 8.35029V8.2819ZM24.6176 17.2324C24.6176 13.5777 22.2926 12.1569 19.9828 12.1569C19.2265 12.119 18.4735 12.2801 17.7989 12.6241C17.1243 12.968 16.5517 13.4829 16.1382 14.1172H16.0318V12.4608H12.4607V24.6177H16.2597V18.1518C16.2048 17.4895 16.4134 16.8324 16.8402 16.3231C17.267 15.8138 17.8775 15.4934 18.5391 15.4317H18.6835C19.8916 15.4317 20.7882 16.1915 20.7882 18.1062V24.6177H24.5872L24.6176 17.2324Z" fill="#A8A8A8"/>
</svg>
                    </Link>
                  </Column>
                  <Row>
                  <Link
            style={footerLink}
            href="/"
           
          >
            Upgrade to Blue Guardian Premiuem
          </Link>
          </Row>
          <Row>
          <Link
            style={footerLink}
            href="/"
           
          >
         Learn More
          </Link>
        </Row>
           
          <Link
            style={footerLink}
            href="/"
           
          >
            View Web Version
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="/"
            
          >
            Email Preferences
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="/"
            
          >
            Unsubscribe
          </Link>
         
            
          <Hr class="h-px my-8 bg-gray-200 border-0 bg-gray-700"></Hr>
        <Text className="">We hope you enjoy monitoring your weekly Wellness Update. But if you no longer wish to receive 
Blue Guardian Insights emails, you may change your preferences by clicking the link above.
          </Text>
        <strong>© 2023 Blue Guardian</strong>
      </Container>  

      
     </Body>
     </Tailwind>
    </Html>
  )
}
export default email;


const footerLink = {
  color: "black",
  textDecoration: "underline",
};

