var $ = jQuery.noConflict();


// Variable to get radio button value
var RadioButVal = "";
// variables to get URL from json twitchdata
var CretetionURL = "";
var HabathCxURL = "";
var OgamingSC2URL = "";
var FreecodecampURL = "";
var StorbeckURL = "";
var ESL_SC2URL = "";
var Noobs2ninjasURL = "";
var RobotCalebURL = "";

// variable to get status from json twitchdata
var OgamingSC2Status = "";
var CretetionStatus = "";
var HabathStatus = "";
var OgamingSC2Status = "";
var FreecodecampStatus = "";
var StorbeckStatus = "";
var ESL_SC2Status = "";
var Noobs2ninjasStatus = "";
var RobotCalebStatus = "";

// variable to get stream json twitchdata
var CretetionStream = "";
var HabathCxStream = "";
var OgamingSC2Stream = "";
var FreecodecampStream = "";
var StorbeckStream = "";
var ESL_SC2Stream = "";
var Noobs2ninjasStream = "";
var RobotCalebStream = "";

var GETTWITCHTV = 'https://wind-bow.gomix.me/twitch-api/streams/channelName?callback=?';
var imageUrl = "images/no-connection.jpg";

$(document).ready(function($) {
    "use strict";

    RadioButVal = $('#SelectRadio:checked').val();
    console.log(RadioButVal);
    // calling api for first time on page load


    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/comster404?callback=?', function(twitchdata) {
        console.log("++++++++++");
        console.log(twitchdata);
    });

    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/cretetion?callback=?', function(twitchdata) {
        console.log(twitchdata);

        CretetionStream = twitchdata.stream;


        if (RadioButVal == "Online") {
            if (CretetionStream != null) {
                CretetionURL = CretetionStream.channel.url;
                CretetionStatus = CretetionStream.channel.status;
                console.log("123456");

                $(".first").attr("href", CretetionURL);
                //     $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle1").addClass("ForFontIconToggle");
                $("#ForFontIconToggle1").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $('#CretetionDescription').html(CretetionStatus);
                console.log(CretetionURL);
            } else {
                $("#addAndRemove1").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                //    $("#ForFontIconToggle1").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        } else if (RadioButVal == "All") {
            if (CretetionStream != null) {
                CretetionURL = CretetionStream.channel.url;
                CretetionStatus = CretetionStream.channel.status;

                $(".first").attr("href", CretetionURL);
                //        $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle1").addClass("ForFontIconToggle");
                $("#ForFontIconToggle1").addClass("fa fa-rss");
                $("#ForFontIconToggle1").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $('#CretetionDescription').html(CretetionStatus);
                console.log(CretetionURL);
            } else {
                $("#addAndRemove1").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                //    $("#ForFontIconToggle1").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        }

    });


    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/habathcx?callback=?', function(twitchdata) {
        console.log(twitchdata);


        HabathCxStream = twitchdata.stream;


        if (RadioButVal == "Online") {
            if (HabathCxStream != null) {
                HabathCxURL = HabathCxStream.channel.url;
                HabathStatus = HabathCxStream.channel.status;
                //      console.log("123456");

                $(".second").attr("href", HabathCxURL);
                //               $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle2").addClass("ForFontIconToggle");
                $("#ForFontIconToggle2").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $('#HabathcxDescription').html(HabathStatus);
                console.log(HabathCxURL);
            } else {
                $("#addAndRemove2").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                //   $("#ForFontIconToggle2").removeClass("fa fa-rss").addClass("ffa fa-thumbs-o-down");
            }
        } else if (RadioButVal == "All") {
            if (HabathCxStream != null) {
                HabathCxURL = HabathCxStream.channel.url;
                HabathStatus = HabathCxStream.channel.status;
                $(".second").attr("href", HabathCxURL);
                //           $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle2").addClass("ForFontIconToggle");
                $("#ForFontIconToggle2").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $('#HabathcxDescription').html(HabathStatus);
                console.log(HabathCxURL);
            } else {
                $("#addAndRemove2").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                //  $("#ForFontIconToggle2").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        }

    });

    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/OgamingSC2?callback=?', function(twitchdata) {
        console.log(twitchdata);


        OgamingSC2Stream = twitchdata.stream;


        if (RadioButVal == "Online") {
            if (OgamingSC2Stream != null) {
                OgamingSC2URL = OgamingSC2Stream.channel.url;
                OgamingSC2Status = OgamingSC2Stream.channel.status;
                //      console.log("123456")

                $(".third").attr("href", OgamingSC2URL);
                //    $(".ForFontIconToggle3").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $('#ForFontIconToggle3').addClass("ForFontIconToggle");
                $("#ForFontIconToggle3").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $("#OgamingDescription").html(OgamingSC2Status);
                console.log(OgamingSC2URL);
            } else {
                $("#addAndRemove3").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                //    $("#ForFontIconToggle3").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        } else if (RadioButVal == "All") {
            if (OgamingSC2Stream != null) {
                OgamingSC2URL = OgamingSC2Stream.channel.url;
                OgamingSC2Status = OgamingSC2Stream.channel.status;

                console.log(OgamingSC2Status);
                $(".third").attr("href", OgamingSC2URL);
                //       $(".ForFontIconToggle3").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $('#ForFontIconToggle3').addClass("ForFontIconToggle");
                $("#ForFontIconToggle3").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $("#OgamingDescription").html(OgamingSC2Status);
                console.log(OgamingSC2URL);
            } else {
                $("#addAndRemove3").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                //    $("#ForFontIconToggle3").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        }

    });


    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(twitchdata) {
        console.log(twitchdata);



        FreecodecampStream = twitchdata.stream;


        if (RadioButVal == "Online") {
            if (FreecodecampStream != null) {
                FreecodecampURL = FreecodecampStream.channel.url;
                FreecodecampStatus = FreecodecampStream.channel.status;
                //      console.log("123456");

                $(".fourth").attr("href", FreecodecampURL);
                // $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle4").addClass("ForFontIconToggle");
                $("#ForFontIconToggle4").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $('#FreecodecampDescription').html(FreecodecampStatus);
                console.log(FreecodecampURL);
            } else {
                $("#addAndRemove4").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                //   $("#ForFontIconToggle4").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        } else if (RadioButVal == "All") {
            if (FreecodecampStream != null) {
                FreecodecampURL = FreecodecampStream.channel.url;
                FreecodecampStatus = FreecodecampStream.channel.status;
                $(".fourth").attr("href", FreecodecampURL);
                //   $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle4").addClass("ForFontIconToggle");
                $("#ForFontIconToggle4").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $('#FreecodecampDescription').html(FreecodecampStatus);
                console.log(FreecodecampURL);
            } else {
                $("#addAndRemove4").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                //    $("#ForFontIconToggle4").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        }

    });

    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/storbeck?callback=?', function(twitchdata) {
        console.log(twitchdata);



        StorbeckStream = twitchdata.stream;


        if (RadioButVal == "Online") {
            if (StorbeckStream != null) {
                StorbeckURL = StorbeckStream.channel.url;
                StorbeckStatus = StorbeckStream.channel.status;
                //      console.log("123456");

                $(".fifth").attr("href", StorbeckURL);
                //     $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle5").addClass("ForFontIconToggle");
                $("#ForFontIconToggle5").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $('#StorbeckDescription').html(StorbeckStatus);
                console.log(StorbeckURL);
            } else {
                $("#addAndRemove5").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                //    $("#ForFontIconToggle5").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        } else if (RadioButVal == "All") {
            if (StorbeckStream != null) {
                StorbeckURL = StorbeckStream.channel.url;
                StorbeckStatus = StorbeckStream.channel.status;
                $(".fifth").attr("href", StorbeckURL);
                // $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle5").addClass("ForFontIconToggle");
                $("#ForFontIconToggle5").addClass("fa fa-rss");
                $("#ForFontIconToggle5").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $('#StorbeckDescription').html(StorbeckStatus);
                console.log(StorbeckURL);
            } else {
                $("#addAndRemove5").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                //    $("#ForFontIconToggle5").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        }

    });

    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?', function(twitchdata) {
        console.log(twitchdata);
        ESL_SC2Stream = twitchdata.stream;


        if (RadioButVal == "Online") {
            if (ESL_SC2Stream != null) {
                ESL_SC2URL = ESL_SC2Stream.channel.url;
                ESL_SC2Status = ESL_SC2Stream.channel.status;
                //      console.log("123456");
                ;
                $(".sixth").attr("href", ESL_SC2URL);
                //    $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIConToggle6").addClass("ForFontIconToggle");
                $("#ForFontIconToggle6").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $('Esl_sc2Description').html(ESL_SC2Status);
                console.log(ESL_SC2URL);
            } else {
                $("#addAndRemove6").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                //    $("#ForFontIconToggle6").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        } else if (RadioButVal == "All") {
            if (ESL_SC2Stream != null) {
                ESL_SC2URL = ESL_SC2Stream.channel.url;
                ESL_SC2Status = ESL_SC2Stream.channel.status;
                $(".sixth").attr("href", ESL_SC2URL);
                //         $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle6").addClass("ForFontIconToggle");
                $("#ForFontIconToggle6").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $("Esl_sc2Description").html(ESL_SC2Status);
                console.log(ESL_SC2URL);
            } else {
                $("#addAndRemove6").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                //    $("#ForFontIconToggle6").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        }

    });

    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/noobs2ninjas?callback=?', function(twitchdata) {
        console.log(twitchdata);

        Noobs2ninjasStream = twitchdata.stream;

        if (RadioButVal == "Online") {
            if (Noobs2ninjasStream != null) {
                Noobs2ninjasURL = Noobs2ninjasStream.channel.url;
                Noobs2ninjasStatus = Noobs2ninjasStream.channel.status;

                //      console.log("123456");
                ;
                $(".seventh").attr("href", Noobs2ninjasURL);
                //        $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle7").addClass("ForFontIconToggle");
                $("#ForFontIconToggle7").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $("Noobs2ninjasDescription").html(Noobs2ninjasStatus);
                console.log(Noobs2ninjasURL);
            } else {
                $("#addAndRemove7").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                //    $("#ForFontIconToggle7").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        } else if (RadioButVal == "All") {
            if (Noobs2ninjasStream != null) {
                Noobs2ninjasURL = Noobs2ninjasStream.channel.url;
                Noobs2ninjasStatus = Noobs2ninjasStream.channel.status;

                $(".seventh").attr("href", Noobs2ninjasURL);
                //           $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle7").addClass("ForFontIconToggle");
                $("#ForFontIconToggle7").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $("Noobs2ninjasDescription").html(Noobs2ninjasStatus);
                console.log(Noobs2ninjasURL);
            } else {
                $("#addAndRemove7").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                //    $("#ForFontIconToggle7").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        }

    });


    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/RobotCaleb?callback=?', function(twitchdata) {
        console.log(twitchdata);

        RobotCalebStream = twitchdata.stream;


        if (RadioButVal == "Online") {
            if (RobotCalebStream != null) {
                RobotCalebURL = RobotCalebStream.channel.url;
                RobotCalebStatus = RobotCalebStream.channel.status;
                //      console.log("123456");

                $(".eigth").attr("href", RobotCalebURL);
                //         $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle8").addClass("ForFontIconToggle");
                $("#ForFontIconToggle8").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $("#RobotCalebDescription").html(RobotCalebStatus);
                console.log(RobotCalebURL);
            } else {
                $("#addAndRemove8").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                //    $("#ForFontIconToggle8").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        } else if (RadioButVal == "All") {
            if (RobotCalebStream != null) {
                RobotCalebURL = RobotCalebStream.channel.url;
                RobotCalebStatus = RobotCalebStream.channel.status;
                $(".eigth").attr("href", RobotCalebURL);
                //      $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                $("#ForFontIconToggle8").addClass("ForFontIconToggle");
                $("#ForFontIconToggle8").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                $("#RobotCalebDescription").html(RobotCalebStatus);
                console.log(RobotCalebURL);
            } else {
                $("#addAndRemove8").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                //   $("#ForFontIconToggle8").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
            }
        }

    });




    // calling api based on radio button value
    $(".myRadio").click(function() {
        RadioButVal = $('#SelectRadio:checked').val();
        console.log(RadioButVal);


        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/cretetion?callback=?', function(twitchdata) {
            console.log(twitchdata);

            CretetionStream = twitchdata.stream;

            if (RadioButVal == "Online") {
                if (CretetionStream != null) {
                    console.log("123456");
                    CretetionURL = CretetionStream.channel.url;
                    CretetionStatus = CretetionStream.channel.status;

                    $(".first").attr("href", CretetionURL);
                    //     $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle1").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle1").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                    $("#CretetionDescription").html(CretetionStatus);
                    console.log(CretetionURL);
                } else {
                    $("#addAndRemove1").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                    //    $("#ForFontIconToggle1").removeClass("fa fa-rss").addClass("fa fa-thumb-o-down");
                }
            } else if (RadioButVal == "All") {
                if (CretetionStream != null) {
                    CretetionURL = CretetionStream.channel.url;
                    CretetionStatus = CretetionStream.channel.status;
                    $(".first").attr("href", CretetionURL);
                    //        $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle1").addClass("ForFontIconToggle");
                    $("#addAndRemove1").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                    $("#CretetionDescription").html(CretetionStatus);
                    console.log(CretetionURL);
                } else {
                    $("#addAndRemove1").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                    //    $("#ForFontIconToggle1").removeClass("fa fa-rss").addClass("fa fa-thumb-o-down");

                }
            }

        });


        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/habathcx?callback=?', function(twitchdata) {
            console.log(twitchdata);


            HabathCxStream = twitchdata.stream;

            if (RadioButVal == "Online") {
                if (HabathCxStream != null) {
                    //      console.log("123456");
                    HabathCxURL = HabathCxStream.channel.url;
                    HabathStatus = HabathCxStream.channel.status;
                    $(".second").attr("href", HabathCxURL);
                    //               $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle2").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle2").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                    $("#HabathcxDescription").html(HabathStatus);
                    console.log(HabathCxURL);
                } else {
                    $("#addAndRemove2").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                    //    $("#ForFontIconToggle2").removeClass("fa fa-rss").addClass("fa fa-thumb-o-down");
                }
            } else if (RadioButVal == "All") {
                if (HabathCxStream != null) {
                    HabathCxURL = HabathCxStream.channel.url;
                    HabathStatus = HabathCxStream.channel.status;
                    $(".second").attr("href", HabathCxURL);
                    //           $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle2").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle2").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                    $("#HabathcxDescription").html(HabathStatus);
                    console.log(HabathCxURL);
                } else {
                    $("#addAndRemove2").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                    //    $("#ForFontIconToggle2").removeClass("fa fa-rss").addClass("fa fa-thumb-o-down");
                }
            }

        });

        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/OgamingSC2?callback=?', function(twitchdata) {
            console.log(twitchdata);


            OgamingSC2Stream = twitchdata.stream;

            if (RadioButVal == "Online") {
                if (OgamingSC2Stream != null) {
                    //      console.log("123456");
                    OgamingSC2URL = OgamingSC2Stream.channel.url;
                    OgamingSC2Status = OgamingSC2Stream.channel.status;
                    $(".third").attr("href", OgamingSC2URL);
                    //    $(".ForFontIconToggle3").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $('#ForFontIconToggle3').addClass("ForFontIconToggle");
                    $("#ForFontIconToggle3").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                    $("#OgamingDescription").html(OgamingSC2Status);

                    console.log(OgamingSC2URL);
                } else {
                    $("#addAndRemove3").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                    //    $("#ForFontIconToggle3").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                }
            } else if (RadioButVal == "All") {
                if (OgamingSC2Stream != null) {
                    OgamingSC2URL = OgamingSC2Stream.channel.url;
                    OgamingSC2Status = OgamingSC2Stream.channel.status;
                    $(".third").attr("href", OgamingSC2URL);
                    //       $(".ForFontIconToggle3").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $('#ForFontIconToggle3').addClass("ForFontIconToggle");
                    $("#ForFontIconToggle3").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                    $("#OgamingDescription").html(OgamingSC2Status);

                    console.log(OgamingSC2URL);
                } else {
                    $("#addAndRemove3").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                    //    $("#ForFontIconToggle3").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                }
            }

        });


        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(twitchdata) {
            console.log(twitchdata);



            FreecodecampStream = twitchdata.stream;

            if (RadioButVal == "Online") {
                if (FreecodecampStream != null) {
                    //      console.log("123456");
                    FreecodecampURL = FreecodecampStream.channel.url;
                    FreecodecampStatus = FreecodecampStream.channel.status;
                    $(".fourth").attr("href", FreecodecampURL);
                    // $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle4").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle4").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                    $("#FreecodecampDescription").html(FreecodecampStatus);
                    console.log(FreecodecampURL);
                } else {
                    $("#addAndRemove4").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                    //    $("#ForFontIconToggle4").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                }
            } else if (RadioButVal == "All") {
                if (FreecodecampStream != null) {
                    FreecodecampURL = FreecodecampStream.channel.url;
                    FreecodecampStatus = FreecodecampStream.channel.status;
                    $(".fourth").attr("href", FreecodecampURL);
                    //   $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle4").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle4").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                    $("#FreecodecampDescription").html(FreecodecampStatus);
                    console.log(FreecodecampURL);
                } else {
                    $("#addAndRemove4").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                    //    $("#ForFontIconToggle4").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                }
            }

        });

        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/storbeck?callback=?', function(twitchdata) {
            console.log(twitchdata);



            StorbeckStream = twitchdata.stream;

            if (RadioButVal == "Online") {
                if (StorbeckStream != null) {
                    //      console.log("123456");
                    StorbeckURL = StorbeckStream.channel.url;
                    $(".fifth").attr("href", StorbeckURL);
                    //     $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle5").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle5").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                    console.log(StorbeckURL);
                } else {
                    $("#addAndRemove5").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                    //    $("#ForFontIconToggle5").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                }
            } else if (RadioButVal == "All") {
                if (StorbeckStream != null) {
                    StorbeckURL = StorbeckStream.channel.url;
                    $(".fifth").attr("href", StorbeckURL);
                    // $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle5").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle5").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                    console.log(StorbeckURL);
                } else {
                    $("#addAndRemove5").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                    //    $("#ForFontIconToggle5").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                }
            }

        });

        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?', function(twitchdata) {
            console.log(twitchdata);
            ESL_SC2Stream = twitchdata.stream;

            if (RadioButVal == "Online") {
                if (ESL_SC2Stream != null) {
                    //      console.log("123456");
                    ESL_SC2URL = ESL_SC2Stream.channel.url;
                    ESL_SC2Status = ESL_SC2Stream.channel.status;
                    $(".sixth").attr("href", ESL_SC2URL);
                    //    $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIConToggle6").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle6").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                    $("#Esl_sc2Description").html(ESL_SC2Status);
                    console.log(ESL_SC2URL);
                } else {
                    $("#addAndRemove6").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                    //    $("#ForFontIconToggle6").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                }
            } else if (RadioButVal == "All") {
                if (ESL_SC2Stream != null) {
                    ESL_SC2URL = ESL_SC2Stream.channel.url;
                    ESL_SC2Status = ESL_SC2Stream.channel.status;
                    $(".sixth").attr("href", ESL_SC2URL);
                    //         $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIConToggle6").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle6").removeClass("fa fa-thumbs-o-down").addClass("fa fa-rss");
                    $("#Esl_sc2Description").html(ESL_SC2Status);
                    console.log(ESL_SC2URL);
                } else {
                    $("#addAndRemove6").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                    //    $("#ForFontIconToggle6").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                }
            }

        });

        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/noobs2ninjas?callback=?', function(twitchdata) {
            console.log(twitchdata);

            Noobs2ninjasStream = twitchdata.stream;

            if (RadioButVal == "Online") {
                if (Noobs2ninjasStream != null) {
                    //      console.log("123456");
                    Noobs2ninjasURL = Noobs2ninjasStream.channel.url;
                    Noobs2ninjasStatus = Noobs2ninjasStream.channel.status;
                    $(".seventh").attr("href", Noobs2ninjasURL);
                    //        $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle7").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle7").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                    $("#Noobs2ninjasDescription").html(Noobs2ninjasStatus);
                    console.log(Noobs2ninjasURL);
                } else {
                    $("#addAndRemove7").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                    //    $("#ForFontIconToggle7").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");

                }
            } else if (RadioButVal == "All") {
                if (Noobs2ninjasStream != null) {
                    Noobs2ninjasURL = Noobs2ninjasStream.channel.url;
                    Noobs2ninjasStatus = Noobs2ninjasStream.channel.status;
                    $(".seventh").attr("href", Noobs2ninjasURL);
                    //           $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle7").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle7").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                    console.log(Noobs2ninjasURL);
                } else {
                    $("#addAndRemove7").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                    //    $("#ForFontIconToggle7").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");

                }
            }

        });


        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/RobotCaleb?callback=?', function(twitchdata) {
            console.log(twitchdata);

            RobotCalebStream = twitchdata.stream;

            if (RadioButVal == "Online") {
                if (RobotCalebStream != null) {
                    //      console.log("123456");
                    RobotCalebURL = RobotCalebStream.channel.url;
                    RobotCalebStatus = RobotCalebStream.channel.status;
                    $(".eigth").attr("href", RobotCalebURL);
                    //         $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle8").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle8").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                    $("#RobotCalebDescription").html(RobotCalebStatus);
                    console.log(RobotCalebURL);
                } else {
                    $("#addAndRemove8").removeClass('fa-youtube-play').addClass('fa-stop-circle-o');
                    //    $("#ForFontIconToggle8").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                }
            } else if (RadioButVal == "All") {
                if (RobotCalebStream != null) {
                    RobotCalebURL = RobotCalebStream.channel.url;
                    RobotCalebStatus = RobotCalebStream.channel.status;
                    $(".eigth").attr("href", RobotCalebURL);
                    //      $(".ForFontIconToggle").css({ "animation-duration": "2s", "-webkit-animation-duration: ": "2s" });
                    $("#ForFontIconToggle8").addClass("ForFontIconToggle");
                    $("#ForFontIconToggle8").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                    $("#RobotCalebDescription").html(RobotCalebStatus);
                    console.log(RobotCalebURL);
                } else {
                    $("#addAndRemove8").removeClass('fa-stop-circle-o').addClass('fa-youtube-play');
                    //    $("#ForFontIconToggle8").removeClass("fa fa-rss").addClass("fa fa-thumbs-o-down");
                }
            }

        });

    });
});