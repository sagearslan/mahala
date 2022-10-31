const { createApp } = Vue

createApp({
    data() {
        return {
            step: 1,
            prev_text: "Back",
            next_text: "Ok",
            input: "",
            playagain: false
        }
    },
    methods: {
        prev(){
            if(this.step > 1) this.step--;
        },
        next(){
            if(this.step === 11){
                this.reset();
            }
            else {
                this.step++;
            }
        },
        reset(){
            this.step = 1;
            this.playagain = false;
            this.input = "";
        }
    },
    computed: {
        message(){
            switch(this.step){
                case 1:
                    this.next_text = "Let's play";
                    return "I'm Madame Mahala.<br>Do you want to see something... <i>spectacular</i>?"; break;
                case 2:
                    this.next_text = "Ok, got it";
                    return "Excellent... You will need a pen and paper."; break;
                case 3:
                    this.next_text = "Ok, it's written down"
                    return "Write down a random 4 or 5 digit number like 1234."; break;
                case 4:
                    this.next_text = "Ok, done"
                    return "Very good. Now, jumble up the numbers (like 3214), and<br>write it below your first number."; break;
                case 5:
                    this.next_text = "Ok"
                    return "Let's make things interesting..."; break;
                case 6:
                    this.next_text = "Ok, done"
                    return "Subtract the smaller number from the larger number.<br>Calculator is your friend."; break;
                case 7:
                    this.next_text = "Ok, done"
                    return "Write down the answer, and circle a random digit that's not a zero<br>(because it's already a circle)."; break;
                case 8:
                    this.next_text = "Yeah right"
                    return "It's magic time...<br>I will use my powers to guess what number you circled."; break;
                case 9:
                    this.next_text = "Next"
                    return "Tell me all the numbers you <u>didn't</u> circle."; break;
                case 10:
                    this.next_text = "Next"
                    this.playagain = false;

                    setTimeout(() => this.step = 11, 5000);
                    setTimeout(() => this.playagain = true, 9000);
                    return "Look into my crystal ball and think of the number you circled..."; break;
                case 11:
                    this.next_text = "Play again";

                    const responses = [
                        "The crystal ball does not lie.",
                        "Impressed? Tell your friends.",
                    ];

                    return responses[Math.floor(Math.random() * responses.length)];

            }
        },
        a(){
            const numbers = this.input.replace(/\D/g,'');
            if(numbers){
                let sum = 0;
                for(let i=0; i<numbers.length; i++){
                    sum = sum + numbers[i];
                }
                return 9 - (sum % 9);
            }
            return 0;
        }
    }
}).mount('#app')