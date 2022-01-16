document.addEventListener("DOMContentLoaded",()=>{
   const textArea = document.querySelector("textarea[name=source");
   textArea.addEventListener("input",(event)=>{
      refreshOutput(event.target.value);
   });
   refreshOutput(textArea.value);
   
   function refreshOutput(html){
      const output = document.querySelector("#output");
      output.innerHTML = html;
   }
});