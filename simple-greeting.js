import { LitElement, html } from 'lit-element';

class SimpleGreeting extends LitElement {
  static get properties() {
    return { name: { type: String } };
  }

  constructor() {
    super();
    this.name = 'SQL-Creator';
    this.start = '';

    this.data = [
        {
          "Arzt-Code-PABS": 1081,
          "AdressNr-NAV": 234,
          "Name": "Allemann Peter",
          "First Name": "Peter",
          "Surname": "Allemann",
          "Address": "Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1087,
          "AdressNr-NAV": 261,
          "Name": "Alshafi Omar",
          "First Name": "Omar",
          "Surname": "Alshafi",
          "Address": "Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1136,
          "AdressNr-NAV": 332,
          "Name": "Anastasakis Emmanouil",
          "First Name": "Emmanouil",
          "Surname": "Anastasakis",
          "Address": "Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1198,
          "AdressNr-NAV": 1012537,
          "Name": "Arn Nicole",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1201,
          "AdressNr-NAV": 2,
          "Name": "Arneberg Oernulf",
          "First Name": "Oernulf",
          "Surname": "Arneberg",
          "Address": "c/o Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1324,
          "AdressNr-NAV": 1012538,
          "Name": "Bajnoczy Mary",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1385,
          "AdressNr-NAV": 1012539,
          "Name": "Bartlome André",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1573,
          "AdressNr-NAV": 1012540,
          "Name": "Beringer Regula",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1640,
          "AdressNr-NAV": 1012541,
          "Name": "Bichsel Sabrina",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1776,
          "AdressNr-NAV": 265,
          "Name": "Blimeister Barbara",
          "First Name": "Barbara",
          "Surname": "Blimeister",
          "Address": "Südhang 1",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1815,
          "AdressNr-NAV": 268,
          "Name": "Böcker Inga-Kristin",
          "First Name": "Inga-Kristin",
          "Surname": "Böcker",
          "Address": "Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1820,
          "AdressNr-NAV": 1012542,
          "Name": "Bögli Peter",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 1990,
          "AdressNr-NAV": 322,
          "Name": "Brandt Peer-Willem",
          "First Name": "Peer-Willem",
          "Surname": "Brandt",
          "Address": "Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": "BÜ",
          "AdressNr-NAV": 1012577,
          "Name": "Bürgi Markus",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 2637,
          "AdressNr-NAV": 1012543,
          "Name": "Chavanne Claudine",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 2754,
          "AdressNr-NAV": 246,
          "Name": "Dalic Severin",
          "First Name": "Severin",
          "Surname": "Dalic",
          "Address": "Klinik Südhang",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 3401,
          "AdressNr-NAV": 1012544,
          "Name": "Fierz Françoise",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 3415,
          "AdressNr-NAV": 333,
          "Name": "Fischer Christine",
          "First Name": "Christine",
          "Surname": "Fischer",
          "Address": "Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 3452,
          "AdressNr-NAV": 1012545,
          "Name": "Flück Sandro",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 3561,
          "AdressNr-NAV": 243,
          "Name": "Franzoni Christina",
          "First Name": "Christina",
          "Surname": "Franzoni",
          "Address": "Südhang 1",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 3613,
          "AdressNr-NAV": 1012546,
          "Name": "Frey Stefanie",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 3805,
          "AdressNr-NAV": 248,
          "Name": "Gacon Alain",
          "First Name": "Alain",
          "Surname": "Gacon",
          "Address": "Klinik Südhang",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 3812,
          "AdressNr-NAV": 1012547,
          "Name": "Gaschen Stefan",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": "MG",
          "AdressNr-NAV": 239,
          "Name": "Geiser Maria",
          "First Name": "Maria",
          "Surname": "Geiser",
          "Address": "Lenzgasse 6",
          "Address 2": "",
          "City": "Basel",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 3903,
          "AdressNr-NAV": 1012548,
          "Name": "Gerber Alessandra",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 3908,
          "AdressNr-NAV": 1012549,
          "Name": "Gerber Isabelle",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 3931,
          "AdressNr-NAV": 249,
          "Name": "Ghira Oana",
          "First Name": "Oana",
          "Surname": "Ghira",
          "Address": "Klinik Südhang",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 3990,
          "AdressNr-NAV": 1012550,
          "Name": "Glaus Eva",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 4163,
          "AdressNr-NAV": 1012551,
          "Name": "Gruner Kei",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 4400,
          "AdressNr-NAV": 327,
          "Name": "Harig Jens",
          "First Name": "Jens",
          "Surname": "Harig",
          "Address": "Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": "RH",
          "AdressNr-NAV": 237,
          "Name": "Hausladen Rainer",
          "First Name": "Rainer",
          "Surname": "Hausladen",
          "Address": "Südhang 1",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 5342,
          "AdressNr-NAV": 1012554,
          "Name": "Hostettler Susanne",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 5001,
          "AdressNr-NAV": 242,
          "Name": "Iliescu Ioana",
          "First Name": "Ioana",
          "Surname": "Iliescu",
          "Address": "Kreuzstrasse 15",
          "Address 2": "",
          "City": "Worb",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 5030,
          "AdressNr-NAV": 1012552,
          "Name": "Iseli Sabine",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 5165,
          "AdressNr-NAV": 1012553,
          "Name": "Jost Nicole",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 5382,
          "AdressNr-NAV": 236,
          "Name": "Kessler Georges",
          "First Name": "Georges",
          "Surname": "Kessler",
          "Address": "Südhang 1",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 5512,
          "AdressNr-NAV": 247,
          "Name": "Kohler Anita",
          "First Name": "Anita",
          "Surname": "Kohler",
          "Address": "Klinik Südhang",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 5615,
          "AdressNr-NAV": 252,
          "Name": "Krebs Thomas",
          "First Name": "Thomas",
          "Surname": "Krebs",
          "Address": "c/o Klinik Südhang",
          "Address 2": "Südhang",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 5685,
          "AdressNr-NAV": 1012555,
          "Name": "Kulcsarova Renata",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 5879,
          "AdressNr-NAV": 1012556,
          "Name": "Lehmann Julia",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 5942,
          "AdressNr-NAV": 1012557,
          "Name": "Lerch Barbara",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 6165,
          "AdressNr-NAV": 250,
          "Name": "Lübow Carola",
          "First Name": "Carola",
          "Surname": "Lübow",
          "Address": "Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 6195,
          "AdressNr-NAV": 1012558,
          "Name": "Lustenberger Irene",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 6335,
          "AdressNr-NAV": 1012559,
          "Name": "Markes Oliver",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 6344,
          "AdressNr-NAV": 1012560,
          "Name": "Marti Eva",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 6345,
          "AdressNr-NAV": 1012561,
          "Name": "Marti Nina",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 6422,
          "AdressNr-NAV": 325,
          "Name": "Mertineit Susan",
          "First Name": "Susan",
          "Surname": "Mertineit",
          "Address": "Südhang 1",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 6430,
          "AdressNr-NAV": 260,
          "Name": "Meyer Thomas",
          "First Name": "Thomas",
          "Surname": "Meyer",
          "Address": "Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": "DM",
          "AdressNr-NAV": 238,
          "Name": "Mihajlovic Dragana",
          "First Name": "Dragana",
          "Surname": "Mihajlovic",
          "Address": "Postfach 2043",
          "Address 2": "",
          "City": "Olten",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 6900,
          "AdressNr-NAV": 1012562,
          "Name": "Oberkircher Lisa",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 7132,
          "AdressNr-NAV": 1012563,
          "Name": "Pfeuti Christine",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 7715,
          "AdressNr-NAV": 1012564,
          "Name": "Ruffieux Katja",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 7738,
          "AdressNr-NAV": 269,
          "Name": "Rysler Christine",
          "First Name": "Christine",
          "Surname": "Rysler",
          "Address": "Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 8136,
          "AdressNr-NAV": 1012566,
          "Name": "Scheurer Nadja",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 8158,
          "AdressNr-NAV": 251,
          "Name": "Schiele Ulrich",
          "First Name": "Ulrich",
          "Surname": "Schiele",
          "Address": "Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 8190,
          "AdressNr-NAV": 1012567,
          "Name": "Schmelzer Nancy",
          "First Name": "Nancy",
          "Surname": "Schmelzer",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 8262,
          "AdressNr-NAV": 245,
          "Name": "Schneider Margarita",
          "First Name": "Margarita",
          "Surname": "Schneider",
          "Address": "Klinik Südhang",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": "0064",
          "AdressNr-NAV": 1012536,
          "Name": "Seitz Andrea",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 7822,
          "AdressNr-NAV": 324,
          "Name": "Selimi Bedzet",
          "First Name": "Bedzet",
          "Surname": "Selimi",
          "Address": "Südhang 1",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 7825,
          "AdressNr-NAV": 323,
          "Name": "Semenin Vitalii",
          "First Name": "Vitalii",
          "Surname": "Semenin",
          "Address": "Südhang 1",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 7914,
          "AdressNr-NAV": 241,
          "Name": "Solt Gabor",
          "First Name": "Gabor",
          "Surname": "Solt",
          "Address": "Hofstrasse 45",
          "Address 2": "",
          "City": "Zug",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 7925,
          "AdressNr-NAV": 1012565,
          "Name": "Soravia Leila",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 8682,
          "AdressNr-NAV": 326,
          "Name": "Strongyli Lito",
          "First Name": "Lito",
          "Surname": "Strongyli",
          "Address": "Südhang 1",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 8710,
          "AdressNr-NAV": 1012568,
          "Name": "Stucki Stefan",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 8721,
          "AdressNr-NAV": 1012569,
          "Name": "Studer Monika",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 8742,
          "AdressNr-NAV": 1012570,
          "Name": "Stutz Sonja",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 8750,
          "AdressNr-NAV": 259,
          "Name": "Suvajdzic Vesna",
          "First Name": "Vesna",
          "Surname": "Suvajdzic",
          "Address": "c/o Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": "0034",
          "AdressNr-NAV": 1012535,
          "Name": "Tagesverantwortung TK",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 8960,
          "AdressNr-NAV": 1012571,
          "Name": "Tschitsaz Armita",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9200,
          "AdressNr-NAV": 266,
          "Name": "Voroneanu Mona",
          "First Name": "Mona",
          "Surname": "Voroneanu",
          "Address": "Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9238,
          "AdressNr-NAV": 1012572,
          "Name": "Vuille Céline",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9258,
          "AdressNr-NAV": 1012573,
          "Name": "Wagner Axel",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9300,
          "AdressNr-NAV": 329,
          "Name": "Walter Matthias",
          "First Name": "Matthias",
          "Surname": "Walter",
          "Address": "Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9331,
          "AdressNr-NAV": 1012574,
          "Name": "Wantz Gerhard",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9373,
          "AdressNr-NAV": 1012575,
          "Name": "Weber Nathalie",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9568,
          "AdressNr-NAV": 258,
          "Name": "Willamowski Frank",
          "First Name": "Frank",
          "Surname": "Willamowski",
          "Address": "c/o Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9640,
          "AdressNr-NAV": 257,
          "Name": "Wölffer Mahdieh",
          "First Name": "Mahdieh",
          "Surname": "Wölffer",
          "Address": "c/o Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9647,
          "AdressNr-NAV": 267,
          "Name": "Wopfner Lempen Alexander",
          "First Name": "Alexander",
          "Surname": "Wopfner Lempen",
          "Address": "Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9651,
          "AdressNr-NAV": 240,
          "Name": "Wüthrich Nathalie",
          "First Name": "Nathalie",
          "Surname": "Wüthrich",
          "Address": "Dorfstrasse 1",
          "Address 2": "",
          "City": "Ipsach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9815,
          "AdressNr-NAV": 244,
          "Name": "Ziegler Roger",
          "First Name": "Roger",
          "Surname": "Ziegler",
          "Address": "Klinik Südhang",
          "Address 2": "",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9891,
          "AdressNr-NAV": 1012576,
          "Name": "Zosso Gabriel",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": "0029",
          "AdressNr-NAV": 1012534,
          "Name": "Zwahlen Jacqueline",
          "First Name": "",
          "Surname": "",
          "Address": "",
          "Address 2": "",
          "City": "",
          "Hinweis": "Im PABS ohne Adresse hinterlegt"
        },
        {
          "Arzt-Code-PABS": 9981,
          "AdressNr-NAV": 5,
          "Name": "Zwicker Felix",
          "First Name": "Felix",
          "Surname": "Zwicker",
          "Address": "Klinik Südhang",
          "Address 2": "Südhang 1",
          "City": "Kirchlindach",
          "Hinweis": "Im PABS mit Adresse hinterlegt"
        }
      ];
  
      var inner = '';
      var new_line = '\n';

      for (var i = 0, len = this.data.length; i < len; i++) {
        console.log(i, this.data[i]);

          var pabs = this.data[i]['Arzt-Code-PABS'];
          var nav = this.data[i]['AdressNr-NAV'];


          // inner = inner + '-- ' + this.data[i]['Name']  + ' (' + pabs + ' -> ' + nav  + ')'+ new_line;
          // var inner  = 'SELECT * FROM WHERE cis_uid = ' + pabs + new_line;

          // UPDATE "user"
          // inner = inner + 'UPDATE "user"' + new_line;
          
          // SET cis_uid = _NEW_,
          // inner = inner + 'SET cis_uid = ' + nav + new_line;
          
          //     description = description || ' | PABS_UID: ' || cis_uid
          // inner = inner + "    description = description || ' | PABS_UID: " + pabs + "'" + new_line;

          // WHERE cis_uid = _OLD_
          // inner = inner + 'WHERE cis_uid = ' + pabs;

          inner = inner + '  (' + pabs + ', ' + nav + ')'

          inner = inner + new_line;

          
      }

      this.start = this.start + inner;


      console.log (this.start);
    }
  
  render() {
    return html`
        <h1>Hello, ${this.name}: Länge ${this.data.length}!</h1> 
        <pre>${this.start}</pre>
        `;
  }
}

customElements.define('simple-greeting', SimpleGreeting);
