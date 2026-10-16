import { ImageResponse } from "next/og";
export const alt = "CNM System Labs — You Know You Can Do Better. Let’s Find What’s Stopping You.";
export const size = { width:1200,height:630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"65px 75px",background:"#090a0c",color:"#f0f0f3",border:"1px solid #e6c779",fontFamily:"sans-serif"}}><div style={{display:"flex",fontSize:25,color:"#e6c779",letterSpacing:5}}>CNM SYSTEM LABS</div><div style={{display:"flex",flexDirection:"column",fontSize:64,letterSpacing:-3,lineHeight:1.15}}><span>You Know You Can Do Better.</span><span style={{color:"#e6c779",marginTop:18}}>Let’s Find What’s Stopping You.</span></div><div style={{display:"flex",justifyContent:"space-between",fontSize:18,color:"#aaaab5"}}><span>STUDENTS · PARENTS · PARTNERS</span><span>JEE & NEET</span></div></div>,size);
}
