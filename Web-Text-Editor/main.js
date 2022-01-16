document.addEventListener("DOMContentLoaded",()=>{
   const textArea = document.querySelector("textarea[name=source-html");
   textArea.innerHTML="";
   textArea.addEventListener("input",(event)=>{
      refreshOutput(event.target.value);
   });
   refreshOutput(textArea.value);   
   function refreshOutput(html){
      const output = document.querySelector("#output");
      output.innerHTML = html;
   }

  /* const textArea2 = document.querySelector("textarea[name=source2]");
   textArea2.innerHTML ="";
   textArea2.addEventListener("input", function(event){
      refreshOutput(event.target.value);
   });
   refreshOutput(textArea2.value);
  
   function refreshOutput(css){
      const output = document.querySelector("#output");
      output.innerHTML = `<style>${css}</style>`;
   }

  /* const textArea3 = document.querySelector("textarea[name=source3]");
   textArea3.innerHTML="";
   textArea3.addEventListener("input",(event)=>{
      refreshOutput(event.target.value);
   });
   refreshOutput(textArea3.value);
   function refreshOutput(htmlm, css, js){
      const output = document.querySelector("#output");
      output.innerHTML =`<script>${js}</script>`
   }*/
   
});