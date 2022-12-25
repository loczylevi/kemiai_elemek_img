
function myFunction() {
                    var img= document.getElementById('image');
                    var bekeres = document.getElementById("bekeres").value;
                    var neg = ['0.79', '0.49', '2.1', '1.4', '1.2', '0.91', '0.75', '0.65', '0.57', '0.51', '2.2', '1.7', '1.8', '1.5', '1.2', '1.1', '0.97', '2.8', '0.88', '2.2', '2.1', '2', '1.9', '1.9', '1.8', '1.7', '1.6', '1.7', '1.6', '1.5', '1.8', '1.5', '1.3', '1.2', '1.1', '1', '3', '2.5', '2.3', '2.2', '2.1', '2', '2', '1.9', '1.8', '1.8', '1.8', '1.7', '2', '1.7', '1.5', '1.3', '1.4', '1.2', '3.3', '2.8', '2.7', '2.7', '2.7', '2.6', '2.6', '2.6', '2.6', '2.5', '2.5', '2.5', '2.5', '2.5', '', '2.4', '2.3', '2.2', '2.1', '2', '2', '1.9', '1.9', '1.8', '1.8', '1.8', '2.1', '1.8', '1.6', '1.5', '1.4', '1.3', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
                    var tomeg =['1.007', '4.002', '6.941', '9.012', '10.811', '12.011', '14.007', '15.999', '18.998', '20.18', '22.99', '24.305', '26.982', '28.086', '30.974', '32.065', '35.453', '39.098', '39.948', '40.078', '44.956', '47.867', '50.942', '51.996', '54.938', '55.845', '58.693', '58.933', '63.546', '65.38', '69.723', '72.64', '74.922', '78.96', '79.904', '83.798', '85.468', '87.62', '88.906', '91.224', '92.906', '95.96', '98.0', '101.07', '102.906', '106.42', '107.868', '112.411', '114.818', '118.71', '121.76', '126.904', '127.6', '131.293', '132.905', '137.327', '138.905', '140.116', '140.908', '144.242', '145.0', '150.36', '151.964', '157.25', '158.925', '162.5', '164.93', '167.259', '168.934', '173.054', '174.967', '178.49', '180.948', '183.84', '186.207', '190.23', '192.217', '195.084', '196.967', '200.59', '204.383', '207.2', '208.98', '210.0', '210.0', '222.0', '223.0', '226.0', '227.0', '231.036', '232.038', '237.0', '238.029', '243.0', '244.0', '247.0', '247.0', '252.0', '257.0', '258.0', '259.0', '261.0', '262.0', '262.0', '264.0', '266.0', '267.0', '268.0', '271.0', '272.0', '284.0', '285.0', '288.0', '289.0', '292.0', '294.0', '295.0']
                    var rendszam = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '19', '18', '20', '21', '22', '23', '24', '25', '26', '28', '27', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '53', '52', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '90', '93', '92', '95', '94', '96', '97', '99', '100', '101', '102', '104', '103', '105', '107', '106', '108', '109', '110', '111', '113', '112', '115', '114', '116', '118', '117']
                    var nevek = ['Hidrogén', 'Hélium', 'Lítium', 'Berillium', 'Bór', 'Szén', 'Nitrogén', 'Oxigén', 'Fluor', 'Neon', 'Nátrium', 'Magnézium', 'Alumínium', 'Szilícium', 'Foszfor', 'Kén', 'Klór', 'Kálium', 'Argon', 'Kalcium', 'Szkandium', 'Titán', 'Vanádium', 'Króm', 'Mangán', 'Vas', 'Nikkel', 'Kobalt', 'Réz', 'Cink', 'Gallium', 'Germánium', 'Arzén', 'Szelén', 'Bróm', 'Kripton', 'Rubídium', 'Stroncium', 'Ittrium', 'Cirkónium', 'Nióbium', 'Molibdén', 'Technécium', 'Ruténium', 'Ródium', 'Palládium', 'Ezüst', 'Kadmium', 'Indium', 'Ón', 'Antimon', 'Jód', 'Tellúr', 'Xenon', 'Cézium', 'Bárium', 'Lantán', 'Cérium', 'Prazeodímium', 'Neodímium', 'Prométium', 'Szamárium', 'Európium', 'Gadolínium', 'Terbium', 'Diszprózium', 'Holmium', 'Erbium', 'Túlium', 'Itterbium', 'Lutécium', 'Hafnium', 'Tantál', 'Volfrám', 'Rénium', 'Ozmium', 'Irídium', 'Platina', 'Arany', 'Higany', 'Tallium', 'Ólom', 'Bizmut', 'Polónium', 'Asztácium', 'Radon', 'Francium', 'Rádium', 'Aktínium', 'Protaktínium', 'Tórium', 'Neptúnium', 'Urán', 'Amerícium', 'Plutónium', 'Kűrium', 'Berkélium', 'Einsteinium', 'Fermium', 'Mendelévium', 'Nobélium', 'Radzerfordium', 'Laurencium', 'Dubnium', 'Borium', 'Sziborgium', 'Hasszium', 'Meitnerium', 'Darmstadtium', 'Röntgenium', 'Nihonium', 'Kopernícium', 'Moszkovium', 'Flerovium', 'Livermorium', 'Oganesszon', 'Tennesszin']
                    var evek = ['1766', '1868', '1817', '1797', '1808', 'Ókor', '1772', '1774', '1886', '1898', '1807', '1808', '1825', '1823', '1669', 'Ókor', '1774', '1807', '1894', '1808', '1879', '1791', '1831', '1797', '1774', 'Ókor', '1751', '1735', 'Ókor', '1520', '1875', '1886', '1250', '1817', '1826', '1898', '1861', '1790', '1794', '1791', '1801', '1782', '1937', '1844', '1803', '1803', 'Ókor', '1817', '1863', 'Ókor', '1450', '1811', '1782', '1898', '1860', '1808', '1839', '1803', '1885', '1885', '1945', '1879', '1889', '1880', '1843', '1886', '1879', '1843', '1879', '1878', '1907', '1923', '1802', '1783', '1925', '1804', '1804', '1741', 'Ókor', 'Ókor', '1861', 'Ókor', '1740', '1898', '1940', '1900', '1939', '1898', '1899', '1917', '1828', '1940', '1789', '1944', '1940', '1944', '1949', '1952', '1953', '1955', '1958', '1966', '1961', '1967', '1976', '1974', '1984', '1982', '1994', '1994', '2004', '1996', '2004', '1999', '2001', '2006', '2010']
                    var elemek = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'K', 'Ar', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Ni', 'Co', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'I', 'Te', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tu', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Pa', 'Th', 'Np', 'U', 'Am', 'Pu', 'Cm', 'Bk', 'Es', 'Fm', 'Md', 'No', 'Rf', 'Lr', 'Db', 'Bh', 'Sg', 'Hs', 'Mt', 'Ds', 'Rg', 'Nh', 'Cn', 'Mc', 'Fl', 'Lv', 'Og', 'Ts'];
                    var kepek = ["elemek/hidrogen.png", "elemek/helium.jpg", "elemek/Limetal.jpeg", "elemek/ber.jpeg", "elemek/bor.jpg", "elemek/szen.jpeg","elemek/nitrogen.png", "elemek/oxigen.jpeg","elemek/fluor.png","elemek/neon.png","elemek/natrium.jpg","elemek/Magnesium.jpg","elemek/alu.jpg","elemek/Silicon.jpg","elemek/foszfor.jpg","elemek/ken.jpg","elemek/klor.jpg","elemek/kalium.jpg","elemek/Argon.jpg","elemek/calcium.jpg","elemek/Scandium.jpg","elemek/Titan.jpg","elemek/Vanadium.jpg","elemek/Chromium.jpg","elemek/mangan.jpg","elemek/Iron.jpg","elemek/nickel.jpg","elemek/kobalt.jpg","elemek/cu.jpg","elemek/Zinc.jpg","elemek/Gallium.png","elemek/Germanium.jpg","elemek/arzen.jpg","elemek/szelen.jpg","elemek/brom.jpg","elemek/kripton.png","elemek/Rubidium.jpg","elemek/Strontium.jpg","elemek/yite.jpg","elemek/cirkonium.jpg","elemek/niobium.jpg","elemek/molibden.jpg","elemek/tech.jpg","elemek/rutenium.jpg","elemek/rhodium.jpg","elemek/palladium.jpg","elemek/silver.jpg","elemek/cadmiun.jpg","elemek/indium.jpg","elemek/Tin.jpg","elemek/antimony.jpg","elemek/jod.jpg","elemek/tellurium.jpg","elemek/xenon.jpg","elemek/Cesium.jpeg","elemek/barium.jpg","elemek/Lanthanum.jpg","elemek/Cerium.jpg","elemek/Praseodymium.jpg","elemek/nd.jpg","elemek/Promethium.jpg","elemek/valami.png","elemek/eu.jpg","elemek/Gadolinium.jpg","elemek/Terbium.jpg","elemek/Dysprosium.jpg","elemek/holmium.jpg","elemek/Erbium.jpg","elemek/Thulium.jpg","elemek/yterbium.jpg","elemek/lulu.jpg","elemek/hafnium.jpg","elemek/ta.png","elemek/volfram.jpg","elemek/rhenium.jpeg","elemek/osmium.jpg","elemek/Iridium.jpg","elemek/platina.jpg","elemek/gold.jpg","elemek/higany.jpg","elemek/Thallium.jpg","elemek/olom.jpg","elemek/Bismuth.jpg","elemek/polonium.jpg","elemek/cucmok.png","elemek/radon.png","elemek/Francium.jpg","elemek/Radium.jpg","elemek/Actinium.png","elemek/papa.png","elemek/th.png","elemek/valami.png","elemek/uranium.jpg","elemek/Americium.jpeg","elemek/pluti.jpg","elemek/valami.png","elemek/berkilium.png","elemek/es.png","elemek/ferm.png","elemek/mende.png","elemek/no.png","elemek/valami.png","elemek/lr.jpeg","elemek/db.png","elemek/Boron_R105.jpg","elemek/valami.png","elemek/Electron_shell_108_hassium.png","elemek/mts.png","elemek/110_darmstadtium_(Ds)_enhanced_Bohr_model.png","elemek/rg.png","elemek/113_nihonium_(Nh)_enhanced_Bohr_model.png","elemek/cn.png","elemek/moszkva.png","elemek/114_flerovium_(Fl)_enhanced_Bohr_model.png","elemek/level.png","elemek/og.png","elemek/vege.jpg"];
                    var listaLength = elemek.length;
                    for (var i = 0; i < listaLength; i++) {
                      if (elemek[i] == bekeres) {
                        img.src = kepek[i]
                      }
                      
                    }
                    for (var i = 0; i < listaLength; i++) {
                      if (evek[i] == bekeres) {
                        img.src = kepek[i]
                      }
                      
                    }
                    for (var i = 0; i < listaLength; i++) {
                      if (nevek[i] == bekeres) {
                        img.src = kepek[i]
                      }
                      
                    }
                    
                    for (var i = 0; i < listaLength; i++) {
                      if (rendszam[i] == bekeres) {
                        img.src = kepek[i]
                      }
                      
                    }

                    for (var i = 0; i < listaLength; i++) {
                      if (tomeg[i] == bekeres) {
                        img.src = kepek[i]
                      }
                      
                    }

                    for (var i = 0; i < listaLength; i++) {
                      if (neg[i] == bekeres) {
                        img.src = kepek[i]
                      }
                      
                    }

                    
                    }


                    // let soMany = 10;
                    // document.getElementById("demo").innerHTML = (`This is ${soMany} times easier! ${x}`);
      