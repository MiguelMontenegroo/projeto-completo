import {styled} from "styled-components"

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img{
    width: 84px;
height: 84.021px;
flex-shrink: 0;
}
h1{
    padding: 10px 0 0 0;
color: #373737;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h2{

    width: 378px;
    color: #000;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: normal;
animation-duration: 4s;
    animation-name: slidein;
    animation-iteration-count: infinite;

    @keyframes slidein {
      from {
        margin-left: 80%;
        width: 100%;
      }

      to {
        margin-left: 0%;
        width: 100%;
      }
    }
}
.div1{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.div2{
    margin: 100px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
input{
    width: 363px;
height: 60px;
flex-shrink: 0;
border-radius: 4px;
border: 1px solid #D5D8DE;
background: #FFF;
color: #323941;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
opacity: 0.8;
padding: 0 0 0 16px;
}
.input2{
    margin: 8px 0 0 0;
}
.button1{
display: flex;
width: 365px;
padding: 13px 133px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 27px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
color: #FFF;
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
margin: 56px 0 0 0;
}
hr{
    width: 363.006px;
height: 1px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #ACACAC;
margin: 18px 0 18px 0;
}
.button2{
    display: flex;
    background-color: transparent;
width: 365px;
padding: 13px 133px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 27px;
border: 1px solid #FE7E02;
color: #FE7E02;
text-align: center;
font-family: Noto Sans;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
