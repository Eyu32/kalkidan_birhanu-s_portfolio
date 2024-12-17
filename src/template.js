class TemplateFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="bg-light-black font-Lato flex flex-col gap-4 text-center py-6 px-6 text-sm sm:text-base ">
                <div class="flex flex-col sm:flex-row sm:justify-between px-20 gap-2 text-center items-center justify-center ">
                    <p class="text-lg font-semibold cursor-default">Kal B.</p>
                    <div class="flex gap-2 " >
                        <a class="hover:text-white/80" href="./index.html#about">About</a>
                        <p>/</p>
                        <a class="hover:text-white/80" href="./works.html">Works</a>
                        <p>/</p>
                        <a class="hover:text-white/80" href="./contact.html">Contact</a>
                    </div>
                </div>

                <hr/>
                <p class="text-sm">Copyright © 2024 <a href="" class="hover:text-white/80">Eyu Birhanu</a>. All rights reserved.</p>

            </div>
        `
    }
}
customElements.define("my-footer", TemplateFooter)