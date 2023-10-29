"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowModel = void 0;
class ShowModel {
    constructor() {
        //idx:string;
        //showBitList: ShowBit[] = [];
        //showBits: any = {};
        this.blockchainBar = `
 
 <article class="prose sm font-mono">

 <div class="pl-20 ...">
   <h4 class="uppercase"> BLOCK: 12344 </h4>
   <p class="mx-20">
     date and time goes here
   </p>
 </div>
</article>

</div>


<div class="divider">

<div class="divider">
 

 <article class="prose sm font-mono">

<div class="pl-20 ...">
<p class="">
06
</p>
</div>
</article>



</div>
</div>


<div class="divider"></div>

<div class="h-9 flex bg-gradient-to-r from-gray-100 to-gray-300">
<div class="flex justify-center items-center grow h-9 ...">
 <progress class="progress w-56"></progress>
 <br />
</div>
</div>

 `;
        this.buttonBar = `
 
 
 <div class="divider">

 </div>

 <div class="h-9 flex bg-gradient-to-r from-gray-100 to-gray-300">
   <div class="flex justify-center items-center grow h-9 ...">
     <button class="btn btn-md btn-wide" @click="click0('black-meat-machine')"> Spin Clockwise
     </button>
     <br />
   </div>
 </div>

 <div class="h-9 flex bg-gradient-to-r from-gray-100 to-gray-300">
   <div class="flex justify-center items-center grow h-9 ...">
     <button class="btn btn-md btn-wide" @click="click0('black-meat-machine')"> Forward
     </button>
     <br />
   </div>
 </div>


 <div class="h-9 flex bg-gradient-to-r from-gray-100 to-gray-300">
   <div class="flex justify-center items-center grow h-9 ...">
     <button class="btn btn-md btn-wide" @click="click0('black-meat-machine')"> Spin Counter-clockwise
     </button>
     <br />
   </div>
 </div>

 <div class="divider"></div>


 <div class="divider">

 `;
    }
}
exports.ShowModel = ShowModel;
//# sourceMappingURL=show.model.js.map