var Discordie = require("discordie");
var client = new Discordie();

client.connect({
    token: "MzMyNTMwODUyNDM5MzkyMjY4.DEE_Mg.q2Cqt-Ufx78WQjDktFPn46FUImA"
});

client.Dispatcher.on("GATEWAY_READY", e => {
    console.log("Username: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {


    if (e.message.content === "hello") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
    } else if (e.message.content === "hi") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
} else if (e.message.content === "yo") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "hola") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "czesc") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Hi") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Hello") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Yo") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Hola") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Czesc") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "good morning") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Good morning") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
    } else if (e.message.content === "witajcie") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Witajcie") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
     } else if (e.message.content === "witajcie") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Witajcie") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
    
    } else if (e.message.content === "Hey") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "hey") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    

} else if (e.message.content === "cheers") {
        e.message.channel.sendMessage("<:TVMuUrt:333263734938140672>");

  } else if (e.message.content === "Cheers") {
        e.message.channel.sendMessage("<:TVMuUrt:333263734938140672>");  
      
      
      

    } else if (e.message.content === "Thant?") {
        e.message.channel.sendMessage("I bet he is in sierra caves. Thant is real caveman.");

} else if (e.message.content === "Vick?") {
        e.message.channel.sendMessage("I saw him last night in bar. I can't describe how drunk he was.");

 
    
    }



else if (e.message.content === "tips"){
        var eightball = ["Improved Flamethrower is your best friend when comes to dealing with big amount of low HP enemies. Oh it's also perfect for your local Barbeque.","Going to visit Toxic Caves? You better find some Rubber Boots first!","Going to Glow? Withouth Rad-X you will melt in seconds. Always have anti-radiation drugs when going there. Oh also a gun will be handy.", "In addition to aiming at your enemies, some weapons can also aim at hexes. For example Rocket Launcher can blow doors! To enter hex aiming mode press CTRL while having attack coursor.","Necropolis? More like PKpolis. Warehouse? Nah it's actually Slaughterhouse. Never venture into dungeons withouth friends as enemy players will lurk there.","You enjoy special encounters? Consider walking. You will never hit special encounter whileusing a car.",
            "Bored of walking into TB traps made by other players? Set your game mode to real time only to deal with that.","Never lose attention while traveling over worldmap. Many lifes has been taken away by careless walking into Rats encounter while talking to someone over team speak.","If you have precious equipment like Ranger Armor never wear it when walking through the world alone. Having a buddy that will pick up your body after getting killed by Riders is a good idea.","Don't like getting hit? Play as a sniper and aim from the distance!","Running out of drugs? Consider hunting for random worldmap events because many of them generates a lot of good stuff.","Never lead anyone to your main base. It might result in someone stealing all your stuff!","You find ingame bug? Report it on forum. You might even get rewarded for doing so!","If someone claims to be great PvP fightter challenge him in the PvP simulator. You can find it at the Vault City.",
            "Are you new to the game? Try sticking around Junktown at the time being. This town got series of features specially for you.","Never park your vehicle in the town or it will get stolen. Exception is a Hub Car Store area which is protected. ","Stuff seems to be moving weird? Press F1 and check your ping and FPS status. If you're ping is bigger than 200 don't fight in real time mode.","The world you life in is a truly harsh. Picking Speech, Gambling and Lockpick as your tag skills of choice is not a bright idea.","If you decide that you're going to play a super mutant remember that you won't be able to use many armors or weapons. There's also many game features that you won't be able to enjoy.","The norhern towns are generally not safe (except Vault City) someone might kill and robe you there!",
            "You can decorate your bases using a furniture. To get Furnitures check up Hub's Oldtown."];
        e.message.channel.sendMessage(eightball[Math.floor(Math.random()*20)]);
}





});
