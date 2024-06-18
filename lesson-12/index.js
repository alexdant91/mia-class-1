const $accordion = document.querySelector("#accordion-1");

const init = () => {
    $accordion.querySelectorAll(".accordion__item-title").forEach($el => {
        $el.addEventListener("click", (e) => {
            const $this = e.target;
            const $openedItemBody = $accordion.querySelector(".accordion__item.open");
            const $currentItem = $this.parentElement;

            if ($currentItem.classList.contains("open")) {
                $currentItem.classList.remove("open");
                return;    
            }

            if ($openedItemBody) $openedItemBody.classList.remove("open");
            
            $currentItem.classList.add("open");
        });
    });
}

init();