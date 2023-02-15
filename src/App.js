import './App.scss';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Home from './components/home';
import WelcomeScreen from './components/home/view/welcome';
import SocialMediaSharing from './components/home/view/social_media';
import CouponsScreen from './components/home/view/coupons_screen';
import rootReducer from './state/reducer';
import Header from './components/header';
import Footer from './components/footer';
import SideBar from './components/sidebar/index.js';
import ThanksScreen from './components/home/view/thanks';
import DetailsScreen from './components/home/view/details';
import _ from 'lodash';

const store = configureStore({ reducer: rootReducer });

const App = () => {

  const dbValues = {
    "message": "Retrieved successfully",
    "widget": {
      "id": 7,
      "created_at": null,
      "updated_at": null,
      "admin_id": 1,
      "title": "ServerAPI",
      "description": "This is a test on server",
      "is_active": 0,
      "is_published": 0,
      "initial_json": {
        "identifier": "Widget",
        "id": null,
        "coverImage": "https://d1x34wjl7a82h9.cloudfront.net/1/widgetimages/1646978504171.jpeg",
        "shareLink": "htttps://bit.ly/1223",
        "wizard": {
          "elements": {
            "wizardBorder": {
              "style": {
                "borderColor": "#000000",
                "borderRadius": "0em"
              }
            }
          }
        },
        "welcomeScreen": {
          "elements": {
            "welcomeScreenHeading": {
              "text": "Refer a friend",
              "style": {
                "fontWeight": "300",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "24px",
                "color": "#545454",
                "fontFamily": "Yesava One",
              }
            },
            "welcomeScreenOfferHeading": {
              "text": "We are launching [XX Product xx] on [xx Date xx].",
              "style": {
                "fontWeight": "600",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "35px",
                "color": "#545454",
                "fontFamily": "Yesava One"
              }
            },
            "welcomeScreenOfferDetails": {
              "text": "Please provide your email below and we'll email you to give you access to a promotion to share with your friends when it's available",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "18px",
                "color": "#545454",
                "fontFamily": "Yesava One"
              }
            },
            "welcomeScreenEmail": {
              "text": "Your email address",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "18px",
                "color": "#545454",
                "fontFamily": "Yesava One"
              }
            },
            "welcomeScreenSubmitButton": {
              "elemID": "welcomeScreenSubmitButton",
              "style": {
                "backgroundColor": "#5db0b9",
                "borderColor": "none",
                "border": "none",
                "borderRadius": "0em"
              }
            },
            "welcomeScreenSubmitButtonText": {
              "elemID": "welcomeScreenSubmitButtonText",
              "text": "Submit",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "18px",
                "color": "#ffffff",
                "fontFamily": "Yesava One"
              }
            }
          }
        },
        "socialMediaScreen": {
          "elements": {
            "socialMediaScreenHeading": {
              "text": "Refer a friend",
              "style": {
                "fontWeight": "300",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "24px",
                "color": "#545454",
                "fontFamily": "Yesava One",
              }
            },
            "socialMediaScreenSubHeading": {
              "text": "How would you like to share?",
              "style": {
                "fontWeight": "600",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "35px",
                "color": "#545454",
                "fontFamily": "Yesava One"
              }
            },
            "socialMediaShareButton": {
              "elemID": "socialMediaShareButton",
              "style": {
                "backgroundColor": "#5db0b9",
                "borderColor": "none",
                "border": "none",
                "borderRadius": "0em"
              }
            },
            "socialMediaShareButtonText": {
              "elemID": "socialMediaShareButtonText",
              "text": "Start Referring",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "18px",
                "color": "#ffffff",
                "fontFamily": "Yesava One"
              }
            }
          }
        },
        "detailsScreen": {
          "elements": {
            "detailsScreenHeading": {
              "text": "Refer a friend",
              "style": {
                "fontWeight": "300",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "24px",
                "color": "#545454",
                "fontFamily": "Yesava One",
              }
            },
            "detailsScreenSubHeading": {
              "text": "Please provide us your details..",
              "style": {
                "fontWeight": "600",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "35px",
                "color": "#545454",
                "fontFamily": "Yesava One"
              }
            },
            "detailsScreenName": {
              "text": "YOUR FIRST NAME",
              "style": {
                "fontWeight": "600",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "35px",
                "color": "#545454",
                "fontFamily": "Yesava One"
              }
            },
            "detailsScreenEmail": {
              "text": "YOUR EMAIL ADDRESS",
              "style": {
                "fontWeight": "600",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "35px",
                "color": "#545454",
                "fontFamily": "Yesava One"
              }
            },
            "detailsScreenShareButton": {
              "elemID": "detailsScreenShareButton",
              "style": {
                "backgroundColor": "#5db0b9",
                "borderColor": "none",
                "border": "none",
                "borderRadius": "0em"
              }
            },
            "detailsScreenShareButtonText": {
              "elemID": "detailsScreenShareButtonText",
              "text": "Next",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "18px",
                "color": "#ffffff",
                "fontFamily": "Yesava One"
              }
            }
          }
        },
        "couponsScreen": {
          "elements": {
            "couponsScreenHeading": {
              "text": "Refer a friend",
              "style": {
                "fontWeight": "300",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "24px",
                "color": "#545454",
                "fontFamily": "Yesava One",
              }
            },
            "couponsScreenSubHeading": {
              "text": "Look what we have got for you..",
              "style": {
                "fontWeight": "600",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "35px",
                "color": "#545454",
                "fontFamily": "Yesava One"
              }
            },
            "couponsScreenOfferDetails": {
              "text": "Don't like this offer? Click below for more coupons.",
              "style": {
                "fontWeight": "600",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "18px",
                "color": "#545454",
                "fontFamily": "Yesava One"
              }
            },
            "couponsScreenShareButton": {
              "elemID": "couponsScreenShareButton",
              "style": {
                "backgroundColor": "#5db0b9",
                "borderColor": "none",
                "border": "none",
                "borderRadius": "0em"
              }
            },
            "couponsScreenShareButtonText": {
              "elemID": "couponsScreenShareButtonText",
              "text": "Start Referring",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "18px",
                "color": "#ffffff",
                "fontFamily": "Yesava One"
              }
            }
          }
        },
        "emailEditScreen": {
          "elements": {
            "emailEditHeading": {
              "text": "Lucemio Home",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "24px",
                "color": "#000000",
                "fontFamily": "Arima Madurai"
              }
            },
            "emailEditImage": {
              "url": null
            },
            "emailEditMessage": {
              "text": "Hello.You’ve been invited by a friend who thinks you’ll like Walmart InHome. We’ll let them take it from here.",
              "style": {
                "fontWeight": "bold",
                "fontStyle": "italic",
                "textDecoration": "underline",
                "fontSize": "11px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "emailEditCouponButton": {
              "style": {
                "backgroundColor": null,
                "borderColor": "#000000",
                "borderRadius": "1em"
              }
            },
            "emailEditCouponUrl": {
              "url": "https://lucemio.com"
            },
            "emailEditDescription": {
              "text": "A note from your friend. Please check the coupon offer to fullfill your daily needs, groceries, etc",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "emailEditLink": {
              "text": "Get $20 Off!",
              "style": {
                "fontWeight": "bold",
                "fontStyle": "italic",
                "textDecoration": "underline",
                "fontSize": "15px",
                "color": "#d83434",
                "fontFamily": "Open Sans"
              }
            }
          }
        },
        "configureMsgScreen": {
          "elements": {
            "configureMsgScreenHeading": {
              "text": "Get $X for every friend you refer",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "24px",
                "color": "#000000",
                "fontFamily": "BioRhyme"
              }
            },
            "configureMsgScreenSubHeading": {
              "text": "Your friends get $X and you get $X after their first purchase of $X+",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "18px",
                "color": "#000000",
                "fontFamily": "Bevan"
              }
            },
            "configureMsgScreenEmailLabelText": {
              "text": "Email",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenFBLabelText": {
              "text": "Facebook",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenMsngrLabelText": {
              "text": "Messenger",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenEmailText": {
              "text": "Hey, check out [COMPANY NAME]! I love their products and I think you will too. I’m giving you $X to spend. You can thank me later :)",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenFBFirstText": {
              "text": "Catchy call to action here",
              "style": {
                "fontWeight": "bold",
                "fontStyle": "italic",
                "textDecoration": "underline",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenFBDescText": {
              "text": "Describe what the friend gets. What\"s in it for them? Describe your product or service and what makes you unique. Give the friend a reason to click.",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenMsngrText": {
              "text": "You can add a personal message",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenEmailButtonText": {
              "text": "Send",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenFBButtonText": {
              "text": "Post",
              "style": {
                "fontWeight": "bold",
                "fontStyle": "italic",
                "textDecoration": "underline",
                "fontSize": "15px",
                "color": "#8f1818",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenMsngrButtonText": {
              "text": "Launch Messenger",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreen3daysReminderText": {
              "text": "Send my friend a reminder in 3 days",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenEmailSignUpText": {
              "text": "Sign up for our emails",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenShareText": {
              "text": "And share your link wherever:",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "configureMsgScreenEmailIcon": {
              "style": {
                "color": "#000000"
              }
            },
            "configureMsgScreenFBIcon": {
              "style": {
                "color": "#000000"
              }
            },
            "configureMsgScreenFBMsngrIcon": {
              "style": {
                "color": "#000000"
              }
            },
            "configureMsgScreenEmailButton": {
              "style": {
                "backgroundColor": null,
                "borderColor": "#000000",
                "borderRadius": "0em"
              }
            },
            "configureMsgScreenFBButton": {
              "style": {
                "backgroundColor": null,
                "borderColor": "#000000",
                "borderRadius": "0em"
              }
            },
            "configureMsgScreenMsngrButton": {
              "style": {
                "backgroundColor": null
              }
            },
            "configureMsgScreenEmailToText": {
              "text": "To"
            },
            "configureMsgScreenEmailFromText": {
              "text": "Email Address...."
            },
            "configureMsgScreenFbImage": {
              "url": null
            }
          }
        },
        "thanksScreen": {
          "elements": {
            "thanksScreenHeading": {
              "text": "Thanks for sharing friendbuy",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "24px",
                "color": "#000000",
                "fontFamily": "Zhi Mang Xing"
              }
            },
            "thanksScreenSubHeading": {
              "text": "Once your friend makes their first purchase you’ll find your $X reward in your inbox.        Don’t stop there! The more you share the more rewards you’ll get!",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "18px",
                "color": "#000000",
                "fontFamily": "Zen Loop"
              }
            },
            "thanksScreenEmailLabelText": {
              "text": "Email",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "thanksScreenFBLabelText": {
              "text": "Facebook",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "thanksScreenMsngrLabelText": {
              "text": "Messenger",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "thanksScreenEmailButtonText": {
              "text": "Share Again",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "thanksScreenMsngrButton": {
              "style": {
                "backgroundColor": null,
                "borderColor": "#000000",
                "borderRadius": "0em"
              }
            },
            "thanksScreenShareText": {
              "text": "And share your link wherever:",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            }
          }
        },
        "redemptionPageSuccess": {
          "elements": {
            "redemptionPageHeading": {
              "text": "Thank You!",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "24px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "redemptionPageSubHeading": {
              "text": "Here\"s your $10 towards your first purchase on Walmart pickup & delivery. Please copy and use the following code at checkout:",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "18px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "redemptionPageSaveBtnText": {
              "text": "Shop Now",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "redemptionPageSaveBtn": {
              "style": {
                "backgroundColor": null
              }
            },
            "redemptionPageBottomText": {
              "text": "*Valid only for first order with Walmart pickup & delivery via Walmart.com grocery. Minimum order of $50. Does not apply to alcohol purchases. Customer responsible for all applicable taxes. Offer subject to change or expire without notice.",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            }
          }
        },
        "redemptionPage": {
          "elements": {
            "redemptionPageHeading": {
              "text": "Welcome to Walmart Pickup & delivery",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "24px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "redemptionPageSubHeading": {
              "text": "Enter your email address to receive $10 off your first purchase:",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "18px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "redemptionPageInputText": {
              "text": "Enter Email..."
            },
            "redemptionPageFirstName": {
              "text": "Enter First Name"
            },
            "redemptionPageLastName": {
              "text": "Enter Last Name"
            },
            "redemptionPageScreen3daysReminderText": {
              "text": "Send my friend a reminder in 3 days",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "redemptionPage3daysReminderText": {
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "redemptionPageSaveBtnText": {
              "text": "Save 10$ Now",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "redemptionPageCodeBtnText": {
              "text": "Copy",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            },
            "redemptionPageSaveBtn": {
              "style": {
                "backgroundColor": null
              }
            },
            "redemptionPageBottomText": {
              "text": "*Valid only for first order with Walmart pickup & delivery via Walmart.comgrocery. Minimum order of $50. Does not apply to alcohol purchases. Customer responsible for all applicable taxes. Offer subject to change or expire without notice.",
              "style": {
                "fontWeight": "500",
                "fontStyle": "normal",
                "textDecoration": "none",
                "fontSize": "15px",
                "color": "#000000",
                "fontFamily": "Open Sans"
              }
            }
          }
        },
        "roundCont": true,
        "contColor": "#1cd940"
      },
      "edited_json": "{\"identifier\":\"Widget\",\"id\":null,\"campaignUrl\":\"http:\\\/\\\/www.lucemio.com\\\/\",\"coverImage\":\"https:\\\/\\\/d1x34wjl7a82h9.cloudfront.net\\\/1\\\/widgetimages\\\/1646978504171.jpeg\",\"shareLink\":\"htttps:\\\/\\\/bit.ly\\\/1223\",\"wizard\":{\"elements\":{\"wizardBorder\":{\"style\":{\"borderColor\":\"#000000\",\"borderRadius\":\"0em\"}}}},\"landingScreen\":{\"elements\":{\"landingScreenHeading\":{\"text\":\"Send a Lucemio gift card\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"24px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"landingRecipientText\":{\"text\":\"Recipient's Name\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"landingSenderText\":{\"text\":\"Your Name\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"landingScreenShareButton\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"landingScreenShareButtonText\":{\"text\":\"Continue\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}}}},\"designScreen\":{\"elements\":{\"designScreenHeading\":{\"text\":\"Pick a design\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"24px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"designScreenSubheading\":{\"text\":\"Recipient's Name\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"designRecipientText\":{\"text\":\"Enter Recipient's Email\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"designScreenShareButton\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"designScreenShareButtonText\":{\"text\":\"Continue\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}}}},\"amountScreen\":{\"elements\":{\"amountScreenHeading\":{\"text\":\"How much would you like to give?\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"24px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"amountScreenAmountText\":{\"text\":null,\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"amountScreenRecipientText\":{\"text\":\"Enter recipient's mail\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"amountScreenShareButton\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"amountScreenShareButtonText\":{\"text\":\"Continue\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}}}},\"reviewScreen\":{\"elements\":{\"reviewScreenHeading\":{\"text\":\"Review your cart\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"24px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"reviewScreenSubHeading\":{\"text\":\"Digital gift cards\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"24px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"reviewScreenAmountText\":{\"text\":null,\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"reviewScreenShareButton\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"reviewScreenShareButtonText\":{\"text\":\"Continue\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}}}},\"thnaksCouponScreen\":{\"elements\":{\"thnaksCouponScreenHeading\":{\"text\":\"Thanks!\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"italic\",\"textDecoration\":\"underline\",\"fontSize\":\"24px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}}}},\"welcomeScreen\":{\"elements\":{\"welcomeScreenHeading\":{\"text\":\"Get $X for every friend you refer\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"24px\",\"color\":\"#010101\",\"fontFamily\":\"Open Sans\"}},\"welcomeScreenSubHeading\":{\"text\":\"Your friends get $X and you get $X after their first purchase of $X+\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"welcomeScreenEmailText\":{\"text\":\"Enter your email to start sharing with friends:\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"welcomeScreenInputText\":{\"text\":\"Enter Email...\"},\"welcomeScreenShareButton\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"welcomeScreenShareButtonText\":{\"text\":\"Start Sharing\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}}}},\"emailEditScreen\":{\"elements\":{\"emailEditHeading\":{\"text\":\"Lucemio Home\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"24px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"emailEditImage\":{\"url\":null},\"emailEditMessage\":{\"text\":\"Hello.You\\u2019ve been invited by a friend who thinks you\\u2019ll like Walmart InHome. We\\u2019ll let them take it from here.\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"11px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"emailEditCouponButton\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"emailEditCouponUrl\":{\"url\":\"https:\\\/\\\/lucemio.com\"},\"emailEditDescription\":{\"text\":\"A note from your friend. Please check the coupon offer to fullfill your daily needs, groceries, etc\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"emailEditLink\":{\"text\":\"Get $20 Off!\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#d83434\",\"fontFamily\":\"Open Sans\"}}}},\"configureMsgScreen\":{\"elements\":{\"configureMsgScreenHeading\":{\"text\":\"Get $X for every friend you refer\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"24px\",\"color\":\"#000000\",\"fontFamily\":\"BioRhyme\"}},\"configureMsgScreenSubHeading\":{\"text\":\"Your friends get $X and you get $X after their first purchase of $X+\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenEmailLabelText\":{\"text\":\"Email\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenFBLabelText\":{\"text\":\"Facebook\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenMsngrLabelText\":{\"text\":\"Messenger\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenEmailText\":{\"text\":\"Hey, check out [COMPANY NAME]! I love their products and I think you will too. I\\u2019m giving you $X to spend. You can thank me later :)\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenFBFirstText\":{\"text\":\"Catchy call to action here\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenFBDescText\":{\"text\":\"Describe what the friend gets. What\\\"s in it for them? Describe your product or service and what makes you unique. Give the friend a reason to click.\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenMsngrText\":{\"text\":\"You can add a personal message\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenEmailButtonText\":{\"text\":\"Send\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenFBButtonText\":{\"text\":\"Post\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#8f1818\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenMsngrButtonText\":{\"text\":\"Launch Messenger\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreen3daysReminderText\":{\"text\":\"Send my friend a reminder in 3 days\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenEmailSignUpText\":{\"text\":\"Sign up for our emails\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenShareText\":{\"text\":\"And share your link wherever:\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"configureMsgScreenEmailIcon\":{\"style\":{\"color\":\"#000000\"}},\"configureMsgScreenFBIcon\":{\"style\":{\"color\":\"#000000\"}},\"configureMsgScreenFBMsngrIcon\":{\"style\":{\"color\":\"#000000\"}},\"configureMsgScreenEmailButton\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"configureMsgScreenFBButton\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"configureMsgScreenMsngrButton\":{\"style\":{\"backgroundColor\":\"#ffffff\"}},\"configureMsgScreenEmailToText\":{\"text\":\"To\"},\"configureMsgScreenEmailFromText\":{\"text\":\"Email Address....\"},\"configureMsgScreenFbImage\":{\"url\":null}}},\"thanksScreen\":{\"elements\":{\"thanksScreenHeading\":{\"text\":\"Thanks for sharing friendbuy\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"24px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"thanksScreenSubHeading\":{\"text\":\"Once your friend makes their first purchase you\\u2019ll find your $X reward in your inbox.        Don\\u2019t stop there! The more you share the more rewards you\\u2019ll get!\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"thanksScreenEmailLabelText\":{\"text\":\"Email\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"thanksScreenFBLabelText\":{\"text\":\"Facebook\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"thanksScreenMsngrLabelText\":{\"text\":\"Messenger\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"thanksScreenEmailButtonText\":{\"text\":\"Share Again\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"thanksScreenMsngrButton\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"thanksScreenShareText\":{\"text\":\"And share your link wherever:\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}}}},\"redemptionPageSuccess\":{\"elements\":{\"redemptionPageHeading\":{\"text\":\"Thank You!\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"24px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"redemptionPageSubHeading\":{\"text\":\"Here\\\"s your $10 towards your first purchase on Walmart pickup & delivery. Please copy and use the following code at checkout:\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"redemptionPageSaveBtnText\":{\"text\":\"Shop Now\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"redemptionPageSaveBtn\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"redemptionPageCopyBtnText\":{\"text\":\"Copy\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"redemptionPageCopyBtn\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"redemptionPageBottomText\":{\"text\":\"*Valid only for first order with Walmart pickup & delivery via Walmart.com grocery. Minimum order of $50. Does not apply to alcohol purchases. Customer responsible for all applicable taxes. Offer subject to change or expire without notice.\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}}}},\"redemptionPage\":{\"elements\":{\"redemptionPageHeading\":{\"text\":\"Welcome to Walmart Pickup & delivery\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"24px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"redemptionPageSubHeading\":{\"text\":\"Enter your email address to receive $10 off your first purchase:\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"18px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"redemptionPageInputText\":{\"text\":\"Enter Email...\"},\"redemptionPageFirstName\":{\"text\":\"Enter First Name\"},\"redemptionPageLastName\":{\"text\":\"Enter Last Name\"},\"redemptionPageCouponBtnText\":{\"text\":\"Get Coupon\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}},\"redemptionPageCouponBtn\":{\"style\":{\"backgroundColor\":\"#ffffff\",\"borderColor\":\"#000000\",\"borderRadius\":\"0em\",\"borderWidth\":\"initial\"}},\"redemptionPageBottomText\":{\"text\":\"*Valid only for first order with Walmart pickup & delivery via Walmart.comgrocery. Minimum order of $50. Does not apply to alcohol purchases. Customer responsible for all applicable taxes. Offer subject to change or expire without notice.\",\"style\":{\"fontWeight\":\"500\",\"fontStyle\":\"normal\",\"textDecoration\":\"none\",\"fontSize\":\"15px\",\"color\":\"#000000\",\"fontFamily\":\"Open Sans\"}}}},\"roundCont\":true,\"contColor\":\"#1cd940\"}",
      "widget_type": "popup",
      "element_id": "somedivtag",
      "coupons": []
    }
  };
  const [dbObject, setDbObject] = useState(null);
  const [selectedElement, setSelectedElement] = useState();
  const [temp, setTemp]= useState();
  const child = React.useRef();

  useEffect(() => {
    fetchData();
  }, []);


  const getData = async () => {
    return await dbValues;
  };


  const fetchData = async () => {
    try {
      const result = await getData();
      setDbObject(result.widget.initial_json);
    } catch (err) { }
  };

  const elementClicked = (element) => {
    const elem = _.cloneDeep(element);
    setSelectedElement(elem);
  }

  const updateValue = (response) => {
    if(!response.id) {
      return;
    }
    const copyObj = _.cloneDeep(dbObject);
    switch (response.selector) {
      case 'style':
        copyObj[response.screen].elements[response.id].style[response.param] =
          response.val;
        break;
      case 'text':
        copyObj[response.screen].elements[response.id].text = response.val;
        break;
      case 'icon':
        copyObj[response.screen].elements[response.id].style[response.param] = response.val;
        break;
      case 'cont':
        copyObj.roundCont = response.val;
        break;
      case 'contColor':
        copyObj.contColor = response.val;
        break;
      default:
        return;
    }
    setDbObject(copyObj);
  }

  // useEffect(() => {
  //   // debugger;
  // }, [selectedElement]);

  return (
    <div> {dbObject &&
      <Provider store={store}>
        <Container fluid>
          <Router>
            <Header></Header>
            <Row>
              <Col md={10} >
                <Routes>
                  <Route path='/' element={<Home />}>
                    <Route path="/" element={<WelcomeScreen dbObject={dbObject} elementClicked={elementClicked}
                      updateValue={updateValue} />}></Route>
                    <Route path="/social" element={<SocialMediaSharing dbObject={dbObject} elementClicked={elementClicked}
                      updateValue={updateValue} />}></Route>
                    <Route path="/details" element={<DetailsScreen dbObject={dbObject} elementClicked={elementClicked}
                      updateValue={updateValue} />}></Route>
                    <Route path="/coupons" element={<CouponsScreen dbObject={dbObject} elementClicked={elementClicked}
                      updateValue={updateValue} />}></Route>
                    <Route path="/thanks" element={<ThanksScreen dbObject={dbObject} />}></Route>
                  </Route>
                </Routes>
              </Col>
              <Col md={2}>
                <SideBar dbObject={dbObject} selectedElement={selectedElement} updateValue={updateValue}></SideBar>
              </Col>
            </Row>
            <Footer></Footer>
          </Router>
        </Container>
      </Provider>}</div>
  );
}

export default App;
