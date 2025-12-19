let validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll("input");

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);

            if (check !== true) {
                send = false;
                
            }
        }

        if (send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute("data-rules");

        if (rules !== null) {
            rules = rules.split("|");

            for (let k in rules) {
                let rDetails = rules[k].split("=");

                switch (rDetails[0]) {
                    case "required":
                        if (input.value.trim() === "") {
                            return "Campo obrigatório";
                        }
                        break;
                    case "min":
                        if (input.value.length < parseInt(rDetails[1])) {
                            return `Mínimo de ${rDetails[1]} caracteres`;
                        }
                        break;
                    case "max":
                        if (input.value.length > parseInt(rDetails[1])) {
                            return `Máximo de ${rDetails[1]} caracteres`;
                        }
                        break;
                }
            }
        }

        return true;
    },
};
let form = document.querySelector(".validator");

form.addEventListener("submit", validator.handleSubmit);
