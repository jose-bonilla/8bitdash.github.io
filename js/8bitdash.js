var pageIndex = 1
var LANG = "english";
var goodMorning = {
	"english":"Good Morning",
    "german":"Guten Morgen",
	"spanish":"Buenos Días",
	"russian":"Доброе утро",
	"french":"Bonjour",
	"mandarin":"早上好",
	"japanese":"おはよう",
	"arabic":"صباح الخير",
	"hindi":"सुप्रभात",
	"korean":"좋은 아침",
	"italian":"Buongiorno",
}
var goodNight = {
	"english":"Good Night",
    "german":"Gute Nacht",
	"spanish":"Buenos Noches",
	"russian":"Доброй ночи",
	"french":"Bonne Nuit",
	"mandarin":"晚安",
	"japanese":"おやすみ",
	"arabic":"تصبح على خير",
	"hindi":"शुभ रात्रि",
	"korean":"안녕히 주무세요",
	"italian":"Buona Notte",
}
var goodAfternoon = {
	"english":"Good Afternoon",
    "german":"Guten Tag",
	"spanish":"Buenos Tardes",
	"russian":"Добрый день",
	"french":"Bon Après-midi",
	"mandarin":"下午好",
	"japanese":"こんにちは",
	"arabic":"مساء الخير",
	"hindi":"नमस्कार",
	"korean":"안녕하세요",
	"italian":"Buon Pomeriggio",
}
var goodEvening = {
	"english":"Good Evening",
    "german":"Guten Abend",
	"spanish":"Buenos Noches",
	"russian":"добрый вечер",
	"french":"Bonne Soirée",
	"mandarin":"晚上好",
	"japanese":"こんばんは",
	"arabic":"مساء الخير",
	"hindi":"गुड इवनिंग",
	"korean":"안녕하세요",
	"italian":"Buona Sera",
}
var sleepWell = {
	"english":"Good Night",
    "german":"Gute Nacht",
	"spanish":"Duerma Bien",
	"russian":"Спать хорошо",
	"french":"Dormez Bien",
	"mandarin":"睡得好",
	"japanese":"よく眠る",
	"arabic":"نم جيدا",
	"hindi":"अच्छे से सो",
	"korean":"숙면",
	"italian":"Dormi Bene",
}
var Dash = function() {

  var cr_hld = "<a target=\"_blank\" href=\"http://www.heart-machine.com/\">heart-machine.com</a>"+ 
    "+ <a target=\"_blank\" href=\"http://www.twitter.com/heartmachinez\">@HeartMachineZ</a>"
  var cr_ms = "<a target=\"_blank\" href=\"http://www.antonkudin.me/megasphere/\">Megasphere</a>"+
    " by Anton Kudin (<a href=\"http://www.twitter.com/antonkudin\">@antonkudin</a>)"
  var cr_bs = "<a target=\"_blank\" href=\"http://bitslap.se/\">bitslap.se</a>"
  var cr_sg = "Sandy Gorden (<a target=\"_blank\" href=\"http://www.twitter.com/bandygrass\">@Bandygrass</a>)"
  var cr_ls = "<a target=\"_blank\" href=\"http://lennsan.tumblr.com/\">http://lennsan.tumblr.com</a>"
  var cr_mf = "Mark Ferrari"
  var cr_vb = "<a target=\"_blank\" href=\"http://www.valenberg.com/\">valenberg.com</a>"
  var cr_rw = "Rain World (<a target=\"_blank\" href=\"http://store.steampowered.com/app/312520/\">Steam</a>, <a target=\"_blank\" href=\"https://twitter.com/RainWorldGame\">Twitter</a>)"
  var cr_bp = "JayTKnox (<a target=\"_blank\" href=\"http://jayknoxart.tumblr.com\">jayknoxart.tumblr.com</a>, <a target=\"_blank\" href=\"https://twitter.com/JayTKnox\">@JayTKnox</a>)"
  var cr_itr = "<a target=\"_blank\" href=\"http://www.facebook.com/intotherift\">Into The Rift</a>"
  
  var credits = {
    "bebop.gif": cr_bp,
    "bicycle.gif": cr_vb,
    "blade.gif": cr_vb,
    "daftpunk.gif": cr_vb,
    "exodus.gif": cr_vb,
    "future.gif": cr_vb,
    "moon.png": cr_vb,
    "redbicycle.gif": cr_vb,
    "skate.gif": cr_vb,
    "streets.gif": cr_vb,
    "tv.gif": cr_vb,
    "barfly.gif": "Longshot", 
    "first.png": cr_ls,
    "second.png": cr_ls,
    "third.png": cr_ls,
    "fourth.gif": cr_ls,
    "fifth.gif": cr_ls,
    "moving.gif": cr_rw,
    "pups_fixed.gif": cr_rw,
    "sticks_and_stones.gif": cr_rw,
    "hyperlight.gif": cr_hld,
    "hyperlight2.gif": cr_hld, 
    "megasphere1.gif": cr_ms,
    "megasphere2.gif": cr_ms,
    "megasphere3.gif": cr_ms,
    "megasphere4.gif": cr_ms,
    "megasphere5.gif": cr_ms,
    "wizard.gif" : cr_sg,
    "gang.gif" : cr_sg,
    "darksouls.gif" : cr_sg, 
    "woods.png": "",
    "mockup.gif": cr_bs,
    "bitslap.gif": cr_bs,
    "asylumgate.gif": cr_bs,
    "nightcycle.gif": cr_bs, 
    "fireflyreboot.gif": cr_bs,
    "town.png":"http://www.serebiiforums.com/showthread.php?379701-Another-Sprite-Showcase",
    "ironberg.png":"http://www.serebiiforums.com/showthread.php?379701-Another-Sprite-Showcase",
    "forrest.png":"http://www.serebiiforums.com/showthread.php?379701-Another-Sprite-Showcase",
    "leonard.png":"http://opengameart.org/content/whispers-of-avalon-grassland-tileset",
    "arkanos.png":"http://opengameart.org/content/mage-city-arcanos",
    "dungeon.gif":"http://opengameart.org/content/a-blocky-dungeon",
    "fire.gif":cr_mf,
    "swirling.gif":cr_mf,
    "cave.gif":cr_mf,
    "underwater.gif":cr_mf,
    "swamp.gif":cr_mf,
    "mountain.gif":cr_mf,
    "fortress.gif":cr_mf,
    "rain.gif":cr_mf,
    "town.gif":cr_mf,
    "bridge.gif":cr_mf,
    "falls.gif":cr_mf,
    "coast.gif":cr_mf,
    "dawn.gif":cr_mf,
    "northlights.gif":cr_mf,
    "lake.gif":cr_mf,
    "snow.gif":cr_mf,
    "bridge_raining.gif":cr_mf,
    "nature.gif": cr_mf,
    "castle.gif": cr_mf,
    "grandcanyon.gif": cr_mf,
    "sea.gif": cr_mf,
    "cyber.gif": "http://flexroman.tumblr.com/",
    "intotherift.gif": cr_itr,
    "intotherift2.gif": cr_itr,
    "intotherift3.gif": cr_itr
  }

  var modes = {"landscapes": 
    ["fire.gif",
    "town.gif", 
    "bridge.gif",
     "coast.gif",
     "dawn.gif", 
     "grandcanyon.gif",
     "northlights.gif",
     "lake.gif",
     "falls.gif", 
     "castle.gif",
     "bridge_raining.gif",
     "snow.gif", 
     "nature.gif",
     "sea.gif",
     "swirling.gif",
     "cave.gif",
     "underwater.gif",
     "swamp.gif",
     "mountain.gif",
     "fortress.gif",
     "rain.gif"],
     "valenberg": [
    "bicycle.gif",
    "blade.gif",
    "daftpunk.gif",
    "exodus.gif",
    "future.gif",
    "moon.png",
    "redbicycle.gif",
    "skate.gif",
    "streets.gif",
    "tv.gif"],
    "intotherift":["intotherift.gif",
    "intotherift2.gif",
    "intotherift3.gif"],
     "lennsan": ["first.png",
      "second.png", "third.png",
      "fourth.gif", "fifth.gif"],
     "rainworld":
       ["moving.gif",
        "pups_fixed.gif",
        "sticks_and_stones.gif"],
     "hyperlightdrifter":
       ["hyperlight.gif",
        "hyperlight2.gif"],
     "megasphere":
       ["megasphere1.gif",
        "megasphere2.gif", 
        "megasphere3.gif",
        "megasphere4.gif",
        "megasphere5.gif"],
     "bandygrass":
       ["gang.gif", "darksouls.gif", "wizard.gif"],
     "woods":
     ["woods.png"],  
     "movies":["bebop.gif"],
     "other": 
    ["barfly.gif",
    "nightcycle.gif", 
    "fireflyreboot.gif", 
    "mockup.gif", 
    "asylumgate.gif", 
    "bitslap.gif",
    "town.png", 
    "ironberg.png", 
    "forrest.png", 
    "leonard.png", 
    "dungeon.gif"]
  }

  var startingModes = ["landscapes", "intotherift", "valenberg",
      "lennsan", "rainworld", "bandygrass", 
      "hyperlightdrifter", "megasphere", "movies"]
  var x = Math.random() * startingModes.length;
  
  this.curMode = startingModes[Math.floor(x)];
  this.custom = "Insert URL"; 
  
  this.page = "clock"
  this.curIndex = 0;

  // controllable via Dat.GUI
  this.showClock = true;
  this.showGreeter = true;
  this.theme = "landscapes"
  this.language = "english"

  this.changeLanguage = function(language) {
	  LANG = language;
	  updateClock();
  }
  
  this.changeCSS = function(imageURL) {
    var rule = document.styleSheets[0].cssRules[0];
    var postfix = "no-repeat center center fixed";
    var s = "url(" + imageURL + ") " + postfix;
    rule.style.background = s 
    rule.style.backgroundSize = "cover"
  }

  this.changeBackground = function(background) {
    console.log("Changing to " + background);
    this.changeCSS("images/" + background)
  }

  this.changeCredit = function(name) {
    console.log("Changing credit to " + name);
    var s = name;
    document.getElementById("footer").innerHTML = s; 
  }

  this.updateBackground = function() {
    var file = modes[this.curMode][this.curIndex]
    var folder = this.curMode + "/"
    this.changeBackground(folder + file);
    if(file in credits) {
      this.changeCredit(credits[file]);
    } else {
      this.changeCredit("Mention me @madewithtea to take credit for your art.")
    }
  } 

  this.nextBackground = function() {
    this.curIndex += 1;
    if(this.curIndex + 1 > modes[this.curMode].length) {
      this.curIndex = 0;
    }
    this.updateBackground();
  }

  this.previousBackground = function() {
    this.curIndex -= 1; 
    if(this.curIndex < 0) {
      this.curIndex = modes[this.curMode].length - 1;
    }
    this.updateBackground();
  }

  this.initialize = function(basil) {
    // read the configuration
    this.basil = basil;
    
    var keys = basil.keys()
    if(keys.indexOf("mode2") != -1) {
      this.curMode = basil.get("mode2");
      console.log("loaded mode from saved settings")
    }

    // random background
    var x = Math.random() * modes[this.curMode].length;
    this.curIndex = Math.floor(x);
    this.updateBackground();

    // override background
    if(keys.indexOf("customURL") != -1) {
      this.custom = basil.get("customURL");
      if(this.custom.startsWith("http")) {
        this.changeCSS(this.custom);
        console.log(this.custom);  
        console.log("loaded custom URL from saved settings")
      }
    }

    // override language
    if(keys.indexOf("language") != -1) {
      this.changeLanguage(basil.get("language"));
    } 
  }

  this.changeMode = function(mode) {
    this.curMode = mode 
    this.curIndex = 0
    this.updateBackground();

    this.basil.set("mode2", mode);
    this.basil.set("done-tutorial", true);
  } 

  this.changePage = function(page) {
    this.page = page
    this.basil.set("page", page);
   
    if(page == "clock") {
      $.fn.fullpage.moveTo(1,1);
    } else {
      $.fn.fullpage.moveTo(2,1);
    }
  }
}

var updateClock = function() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    
    var greeting = ""
    if((0 <= currentHours) && (currentHours < 6)) {
		greeting = goodNight[LANG];
    }
    if((6 <= currentHours) && (currentHours < 12)) {
		greeting = goodMorning[LANG];
    }
    if((12 <= currentHours) && (currentHours < 18)) {
		greeting = goodAfternoon[LANG];	
    }
    if((18 <= currentHours) && (currentHours < 22)) {
		greeting = goodEvening[LANG];
    }
    if((22 <= currentHours) && (currentHours < 24)) {
		greeting = sleepWell[LANG];    
	}
    
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );
  
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  
    var timeOfDay = ( currentHours < 12 ) ? "am" : "pm";
  
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  
    var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
    document.getElementById("greeting").firstChild.nodeValue = greeting 
  }

window.onload = function() {

  $('#fullpage').fullpage({
     resize: false,
     css3: true,
     onLeave: function(index, nextIndex, direction){
      pageIndex = nextIndex 
     }
  })

  var dash = new Dash()
  var basil = new window.Basil(); 

  dash.initialize(basil) 
  var gui = new dat.GUI();
  dat.GUI.toggleHide();

  var defa = gui.addFolder('default');
  var languages = ["english", "german", "spanish", "russian", "french", 
  "mandarin", "japanese", "arabic", "hindi", "korean", "italian"];
  var languages = defa.add(dash, "language", languages);
  var themes = ["landscapes", "valenberg", "intotherift", "lennsan", 
      "rainworld", "hyperlightdrifter",
      "megasphere", "bandygrass", "woods", "movies", "other"];
  var themes = defa.add(dash, "theme", themes);
  defa.open();

  var customize = gui.addFolder("fixed custom URL");
  var customURL = customize.add(dash, "custom");
  customize.open();
  
  languages.onChange(function(value) {
	  dash.changeLanguage(value);
      basil.set("language", value);
	  alertify.log("Saved settings")
  })

  themes.onChange(function(value) {
    dash.changeMode(value);
    alertify.log("Saved settings")
  })

  customURL.onChange(function(value) {
    if(value.startsWith("http")) {
      dash.changeCSS(value)
      basil.set("customURL", value);
    } else {
      basil.set("customURL", "");
      dash.updateBackground();
    }
  })

  if(basil.keys().indexOf('done-tutorial') == -1) {
    alertify.log("Arrow-Down for Map and H for Settings");
  }

  updateClock();
  setInterval('updateClock()', 10000 )

  Mousetrap.bind("right", function() {
    dash.nextBackground()});
  Mousetrap.bind("left", function() {
    dash.previousBackground()});
  Mousetrap.bind("g", function() {
    window.location.href = "https://www.github.com"
  });
  Mousetrap.bind("r", function() {
    window.location.href = "https://www.reddit.com"
  });
  Mousetrap.bind("f", function() {
    window.location.href = "https://www.facebook.com"
  });
  Mousetrap.bind("y", function() {
    window.location.href = "https://www.youtube.com"
  });
  Mousetrap.bind("u", function() {
    window.location.href = "https://www.duckduckgo.com"
  });
  Mousetrap.bind("m", function() {
    window.location.href = "https://maps.google.com"
  });
  Mousetrap.bind("s", function() {
    window.location.href = "https://www.openstreetmap.org/"
  });
  Mousetrap.bind("w", function() {
    window.location.href = "https://www.wikipedia.com"
  });
  Mousetrap.bind("b", function() {
    window.location.href = "https://www.bing.com"
  });
  Mousetrap.bind("t", function() {
    window.location.href = "https://www.twitter.com"
  });
  Mousetrap.bind("d", function() {
    window.location.href = "https://www.digg.com"
  });
  Mousetrap.bind("e", function() {
    window.location.href = "https://www.ebay.com"
  });
  Mousetrap.bind("a", function() {
    window.location.href = "https://www.amazon.com"
  });
  Mousetrap.bind("o", function() {
    window.location.href = "https://www.google.com"
  });
  Mousetrap.bind("p", function() {
    window.location.href = "https://www.google.com/images"
  });

  initMap();
}

