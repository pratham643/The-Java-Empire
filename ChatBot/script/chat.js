// initialize by constructing a named function..chat-bubble.
// .and add text processing plugin:
var chatWindow = new Bubbles(document.getElementById("chat"), "chatWindow", {
  // the one that we care about is inputCallbackFn()
  // this function returns an object with some data that we can process from user input
  // and understand the context of it

  // this is an example function that matches the text user typed to one of the answer bubbles
  // this function does no natural language processing
  // this is where you may want to connect this script to NLC backend.
  inputCallbackFn: function(o) {
    // add error conversation block & recall it if no answer matched
    var miss = function() {
      chatWindow.talk(
        {
          "i-dont-get-it": {
            says: [
              "Sorry, I don't get it 😕. Pls repeat? Or you can just click below 👇"
            ],
            reply: o.convo[o.standingAnswer].reply
          }
        },
        "i-dont-get-it"
      )
    }

    // do this if answer found
    var match = function(key) {
      setTimeout(function() {
        chatWindow.talk(convo, key) // restart current convo from point found in the answer
      }, 600)
    }

    // sanitize text for search function
    var strip = function(text) {
      return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "")
    }

    // search function
    var found = false
    o.convo[o.standingAnswer].reply.forEach(function(e, i) {
      strip(e.question).includes(strip(o.input)) && o.input.length > 0
        ? (found = e.answer)
        : found ? null : (found = false)
    })
    found ? match(found) : miss()
  }
}) // done setting up chat-bubble

// conversation object defined separately, but just the same as in the
// "Basic chat-bubble Example" (1-basics.html)
var convo = {
  "ice": {
    says: ["Hi", "How Can I Help you Subscription Related Query, Course Related Query, Demo Class Related Query, Connect With Agent?"],
    reply: [
      {
        question: "Subscription Related Query",
        answer: "Subscription Related Query"
      },
      {
        question: "Course Related Query",
        answer: "Course Related Query"
      },
      {
        question: "Demo Class Related Query",
        answer: "Demo Class Related Query"
      },
      {
        question: "Connect With Agent",
        answer: "Connect With Agent"
      },
      {
        question: "Chat On Whatsapp",
        answer: "Chat On Whatsapp"
      }
    ]
  },
  "Subscription Related Query": {
    says: ["Currently We Are Not Available On Chat Service, Soon It will Start.Please Conatct Us On 8055450657."],
    reply: [
      {
        question: "Start Over",
        answer: "ice"
      }
    ]
  },
  "Course Related Query": {
    says: ["Currently We Are Not Available On Chat Service, Soon It will Start.Please Conatct Us On 8055450657."],
    reply: [
      {
        question: "Start Over",
        answer: "ice"
      }
    ]
  },
  "Demo Class Related Query": {
    says: ["Currently We Are Not Available On Chat Service, Soon It will Start.Please Conatct Us On 8055450657."],
    reply: [
      {
        question: "Start Over",
        answer: "ice"
      }
    ]
  },
  "Connect With Agent": {
    says: ["Currently We Are Not Available On Chat Service, Soon It will Start.Please Conatct Us On 8055450657."],
    reply: [
      {
        question: "Start Over",
        answer: "ice"
      }
    ]
  },
  "Chat On Whatsapp": {
    says: ["Currently We Are Not Available On Chat Service, Soon It will Start.Please Conatct Us On 8055450657."],
    reply: [
      {
        question: "Start Over",
        answer: "ice"
      }
    ]
  }
  
}

// pass JSON to your function and you're done!
chatWindow.talk(convo);