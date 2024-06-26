const dt = luxon.DateTime;

const { createApp } = Vue;

createApp({
    data() {
        return {
            isOnline: dt.now().toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
            botIndex: 0,
            rndControl: null,
            planeBool: true,
            activeContact: 0,
            userText: "",
            searchName: "",
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },

    created() {
        console.log(this.contacts[0].avatar);
        // console.log(this.dt.now());
        console.warn();
    },

    methods: {
        selectContact: function (index) {
            this.activeContact = index;
            console.log(this.activeContact);
        },

        sendText: function () {
            botIndex = this.activeContact;
            console.log(this.contacts[this.activeContact].messages);
            this.planeBool = true;
            
            const currTime = this.setCurrentTime().toString();
            const newMessage = {
                message: "",
                date: currTime,
                status: "sent"
            };

            newMessage.message = this.userText;

            if (this.userText != "") {
                this.contacts[this.activeContact].messages.push(newMessage);
                this.userText = "";
                this.isOnline = "Online"
                setTimeout(this.botAnswer, 3000)
            }
        },

        botAnswer: function () {
            const currTime = this.setCurrentTime().toString();

            let rndAnswer = "";
            switch (this.getRndInt()) {
                case 1:
                    rndAnswer = "Che bella giornata"
                    break;

                case 2:
                    rndAnswer = "Sto bene e tu?"
                    break;

                case 3:
                    rndAnswer = "Domani mi sposo con ChatGPT"
                    break;

                case 4:
                    rndAnswer = "Sto morendo di fame"
                    break;

                case 5:
                    rndAnswer = "Non ho niente, lasciami stare"
                    break;

                default:
                    rndAnswer = "Ok"
                    break;
            }

            const botMessage = {
                message: rndAnswer,
                date: currTime,
                status: "received"
            }

            const prova = this.getIsOnline();
            console.warn(prova);

            this.contacts[this.botIndex].messages.push(botMessage)

            this.clearMyInterval(prova);
        },

        getRndInt: function () {
            let rndNumb = Math.floor(Math.random() * (5 - 1)) + 1;

            if (rndNumb != this.rndControl) {
                this.rndControl = rndNumb;
                return rndNumb;
            } else {
                this.rndControl = rndNumb;
                this.getRndInt();
            }

        },

        searchUser: function () {
            console.log(this.searchName);
            this.contacts.forEach((currElem, index) => {
                console.warn(currElem.name);

                const prova = currElem.name.toLowerCase();
                const prova2 = this.searchName.toLowerCase();

                console.log(prova);
                if (prova.indexOf(prova2, 0) === -1) {
                    currElem.visible = false;
                } else {
                    currElem.visible = true;
                }

                console.warn(currElem.visible);
            });

        },

        deleteMessage: function (index) {
            console.log(this.contacts[this.activeContact].messages);
            if (this.contacts[this.activeContact].messages.length > 0)
                this.contacts[this.activeContact].messages.splice(index, 1);
        },

        deleteAllMessages: function(){
            console.log(this.contacts[this.activeContact].messages);
            if (this.contacts[this.activeContact].messages.length > 0)
                this.contacts[this.activeContact].messages = [];
        },

        deleteContact: function(){
            // console.log(this.contacts[this.activeContact]);
            const newContact = {
                avatar:"",

            }
            if (this.contacts.length > 0)
                this.contacts.splice(this.activeContact, 1);
            else{
                this.contacts = newContact;
            }

        },

        getLastMessage: function (index) {
            // console.warn(index);
            const currLastMessage = {
                text: "",
                date: "",
            }

            if (this.contacts[index].messages.length > 0) {
                currLastMessage.text = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;
                currLastMessage.date = this.contacts[index].messages[this.contacts[index].messages.length - 1].date;
                return currLastMessage;
            } else {
                currLastMessage.text = "Nessun messaggio Disponibile"
                currLastMessage.date = "00/00/0000 00:00:00"
                return currLastMessage;
            }


        },

        setCurrentTime: function () {
            
            const dateTime = dt.now();
            const currentDateTime = dateTime.toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
            console.log(currentDateTime);
            
            this.isOnline = currentDateTime;
            return currentDateTime;
        },


        getIsOnline: function(){
            const intervalOnline = setInterval(this.setCurrentTime, 2000);
            
            return intervalOnline;
        },

        clearMyInterval: function(numb){
            clearInterval(numb);
        },

        setPlane: function () {
            this.planeBool = false;

            if (this.userText == '') {
                this.planeBool = true;
            } else {
                this.planeBool = false;

            }
        },

    }
}).mount("#app")