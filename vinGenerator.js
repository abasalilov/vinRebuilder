// VIN Position    Section Information
// 1-2              WMI country code
// 2-3              manufacturer
// 4-8              VDS equipment codes
// 9                check digit
// 10               VIS model year
// 11               manufacturing plant
// 12-17            serial number
// or
// 10               VIS model year
// 11               manufacturing plant
// 12-14            WMI suffix
// 15-17            serial number


// #1.                   VIN Character 1- 3 - Manufacturing Country Codes
// 1 or 4,5          2           3           J           K           S           W           Z                 Y
// USA             Canada      Mexico      Japan       Korea       England     Germany     Italy            Sweden/Findland

//  1, 4, 5 = United States
// 2 = Canada
// 3 = Mexico

// A-H Africa  AA-AH = South Africa

//J-R   Asia    J = Japan
// KL-KR = South Korea
// L = China
// MA-ME = India
// MF-MK = Indonesia
// ML-MR = Thailand
// PA-PE = Philippines
// PL-PR = Malaysia
// RF-RG = Taiwan

// S-Z Europe  SA-SM = United Kingdom
// SN-ST, W = Germany
// SU-SZ = Poland
// TA-TH = Switzerland
// TJ-TP = Czech Republic
// TR-TV = Hungary
// TW = Portugal
// VA-VE = Austria
// VF-VR = France
// VS-VW = Spain
// VX-V2 = Yugoslavia
// XL-XM = The Netherlands
// XS-XW = USSR
// X3-X0 = Russia
// YA-YE = Belgium
// YF-YK = Finland
// YS-YW = Sweden
// ZA-ZR = Italy


// 6A-6W = Australia
// 7A-7E = New Zealand

// 8A-8E = Argentina
// 8F-8J = Chile
// 8X-82 = Venezuela
// 9A-9E, 93-99 = Brazil
// 9F-9J = Colombia

// WMI  Manufacturer
// AAV Volkswagen South Africa
// AC5 Hyundai South Africa
// ADD Hyundai South Africa
// AFA Ford South Africa
// AHT Toyota South Africa
// JA3 Mitsubishi
// JA4 Mitsubishi
// JA  Isuzu
// JD  Daihatsu
// JF  Fuji Heavy Industries (Subaru)
// JH  Honda
// JK  Kawasaki (motorcycles)
// JL5 Mitsubishi Fuso
// JMB Mitsubishi Motors
// JMY Mitsubishi Motors
// JMZ Mazda
// JN  Nissan
// JS  Suzuki
// JT  Toyota
// JY  Yamaha (motorcycles)
// KL  Daewoo General Motors South Korea
// KM  Hyundai
// KMY Daelim (motorcycles)
// KM1 Hyosung (motorcycles)
// KN  Kia
// KNM Renault Samsung
// KPA SsangYong
// KPT SsangYong
// LAN Changzhou Yamasaki Motorcycle
// LBB Zhejiang Qianjiang Motorcycle (Keeway/Generic)
// LBE Beijing Hyundai
// LBM Zongshen Piaggio
// LBP Chongqing Jainshe Yamaha (motorcycles)
// LB2 Geely Motorcycles
// LCE Hangzhou Chunfeng Motorcycles (CFMOTO)
// LDC Dong Feng Peugeot Citroen (DPCA), China
// LDD Dandong Huanghai Automobile
// LDN SouEast Motor
// LDY Zhongtong Coach, China
// LET Jiangling-Isuzu Motors, China
// LE4 Beijing Benz, China
// LFB FAW, China (busses)
// LFG Taizhou Chuanl Motorcycle Manufacturing
// LFP FAW, China (passenger vehicles)
// LFT FAW, China (trailers)
// LFV FAW-Volkswagen, China
// LFW FAW JieFang, China
// LFY Changshu Light Motorcycle Factory
// LGB Dong Feng (DFM), China
// LGH Qoros (formerly Dong Feng (DFM)), China
// LGX BYD Auto, China
// LHB Beijing Automotive Industry Holding
// LH1 FAW-Haima, China
// LJC JAC, China
// LJ1 JAC, China
// LKL Suzhou King Long, China
// LL6 Hunan Changfeng Manufacture Joint-Stock
// LL8 Linhai (ATV)
// LMC Suzuki Hong Kong (motorcycles)
// LPR Yamaha Hong Kong (motorcycles)
// LSG Shanghai General Motors, China
// LSJ MG Motor UK Limited - SAIC Motor, Shanghai, China
// LSV Shanghai Volkswagen, China
// LSY Brilliance Zhonghua
// LTV Toyota Tian Jin
// LUC Guangqi Honda, China
// LVS Ford Chang An
// LVV Chery, China
// LVZ Dong Feng Sokon Motor Company (DFSK)
// LZM MAN China
// LZE Isuzu Guangzhou, China
// LZG Shaanxi Automobile Group, China
// LZP Zhongshan Guochi Motorcycle (Baotian)
// LZY Yutong Zhengzhou, China
// LZZ Chongqing Shuangzing Mech & Elec (Howo)
// L4B Xingyue Group (motorcycles)
// L5C KangDi (ATV)
// L5K Zhejiang Yongkang Easy Vehicle
// L5N Zhejiang Taotao, China (ATV & motorcycles)
// L5Y Merato Motorcycle Taizhou Zhongneng
// L85 Zhejiang Yongkang Huabao Electric Appliance
// L8X Zhejiang Summit Huawin Motorcycle
// MAB Mahindra & Mahindra
// MAC Mahindra & Mahindra
// MAJ Ford India
// MAK Honda Siel Cars India
// MAL Hyundai
// MAT Tata Motors
// MA1 Mahindra & Mahindra
// MA3 Suzuki India (Maruti)
// MA6 GM India
// MA7 Mitsubishi India (formerly Honda)
// MBH Suzuki India (Maruti)
// MBJ Toyota India
// MBR Mercedes-Benz India
// MB1 Ashok Leyland
// MCA Fiat India
// MCB GM India
// MC2 Volvo Eicher commercial vehicles limited.
// MDH Nissan India
// MD2 Bajaj Auto
// MEE Renault India
// MEX Volkswagen India
// MHF Toyota Indonesia
// MHR Honda Indonesia
// MLC Suzuki Thailand
// MLH Honda Thailand
// MMB Mitsubishi Thailand
// MMC Mitsubishi Thailand
// MMM Chevrolet Thailand
// MMT Mitsubishi Thailand
// MM8 Mazda Thailand
// MNB Ford Thailand
// MNT Nissan Thailand
// MPA Isuzu Thailand
// MP1 Isuzu Thailand
// MRH Honda Thailand
// MR0 Toyota Thailand
// NLA Honda Türkiye
// NLE Mercedes-Benz Türk Truck
// NLH Hyundai Assan
// NM0 Ford Turkey
// NM4 Tofaş Türk
// NMT Toyota Türkiye
// PE1 Ford Phillipines
// PE3 Mazda Phillipines
// PL1 Proton, Malaysia
// PNA NAZA, Malaysia (Peugeot)
// RFB Kymco, Taiwan
// RFG Sanyang SYM, Taiwan
// RFL Adly, Taiwan
// RFT CPI, Taiwan
// RF3 Aeon Motor, Taiwan
// SAL Land Rover
// SAJ Jaguar
// SAR Rover
// SB1 Toyota UK
// SBM McLaren
// SCA Rolls Royce
// SCB Bentley
// SCC Lotus Cars
// SCE DeLorean Motor Cars N. Ireland (UK)
// SCF Aston
// SDB Peugeot UK (formerly Talbot)
// SED General Motors Luton Plant
// SEY LDV
// SFA Ford UK
// SFD Alexander Dennis UK
// SHH Honda UK
// SHS Honda UK
// SJN Nissan UK
// SKF Vauxhall
// SLP JCB Research UK
// SMT Triumph Motorcycles
// SUF Fiat Auto Poland
// SUL FSC (Poland)
// SUP FSO-Daewoo (Poland)
// SUU Solaris Bus & Coach (Poland)
// TCC Micro Compact Car AG (smart 1998-1999)
// TDM QUANTYA Swiss Electric Movement (Switzerland)
// TMA Hyundai Motor Manufacturing Czech
// TMB Škoda (Czech Republic)
// TMK Karosa (Czech Republic)
// TMP Škoda trolleybuses (Czech Republic)
// TMT Tatra (Czech Republic)
// TM9 Škoda trolleybuses (Czech Republic)
// TNE TAZ
// TN9 Karosa (Czech Republic)
// TRA Ikarus Bus
// TRU Audi Hungary
// TSE Ikarus Egyedi Autobuszgyar, (Hungary)
// TSM Suzuki Hungary
// TW1 Toyota Caetano Portugal
// TYA Mitsubishi Trucks Portugal
// TYB Mitsubishi Trucks Portugal
// UU1 Renault Dacia, (Romania)
// UU3 ARO
// UU6 Daewoo Romania
// U5Y Kia Motors Slovakia
// U6Y Kia Motors Slovakia
// VAG Magna Steyr Puch
// VAN MAN Austria
// VBK KTM (Motorcycles)
// VF1 Renault
// VF2 Renault
// VF3 Peugeot
// VF4 Talbot
// VF6 Renault (Trucks & Buses)
// VF7 Citroën
// VF8 Matra
// VF9/795 Bugatti
// VG5 MBK (motorcycles)
// VLU Scania France
// VN1 SOVAB (France)
// VNE Irisbus (France)
// VNK Toyota France
// VNV Renault-Nissan
// VSA Mercedes-Benz Spain
// VSE Suzuki Spain (Santana Motors)
// VSK Nissan Spain
// VSS SEAT
// VSX Opel Spain
// VS6 Ford Spain
// VS7 Citroën Spain
// VS9 Carrocerias Ayats (Spain)
// VTH Derbi (motorcycles)
// VTT Suzuki Spain (motorcycles)
// VV9 TAURO Spain
// VWA Nissan Spain
// VWV Volkswagen Spain
// VX1 Zastava / Yugo Serbia
// WAG Neoplan
// WAU Audi
// WA1 Audi SUV
// WBA BMW
// WBS BMW M
// WDA Daimler
// WDB Mercedes-Benz
// WDC DaimlerChrysler
// WDD Mercedes-Benz
// WDF Mercedes-Benz (commercial vehicles)
// WEB Evobus GmbH (Mercedes-Bus)
// WJM Iveco Magirus
// WF0 Ford Germany
// WMA MAN Germany
// WME smart
// WMW MINI
// WMX Mercedes-AMG
// WP0 Porsche
// WP1 Porsche SUV
// W0L Opel
// WUA quattro GmbH
// WVG Volkswagen MPV/SUV
// WVW Volkswagen
// WV1 Volkswagen Commercial Vehicles
// WV2 Volkswagen Bus/Van
// WV3 Volkswagen Trucks
// XLB Volvo (NedCar)
// XLE Scania Netherlands
// XLR DAF (trucks)
// XL9/363 Spyker
// XMC Mitsubishi (NedCar)
// XTA Lada/AutoVaz (Russia)
// XTT UAZ/Sollers (Russia)
// XUF General Motors Russia
// XUU AvtoTor (Russia, General Motors SKD)
// XW8 Volkswagen Group Russia
// XWB UZ-Daewoo (Uzbekistan)
// XWE AvtoTor (Russia, Hyundai-Kia SKD)
// X4X AvtoTor (Russia, BMW SKD)
// X7L Renault AvtoFramos (Russia)
// X7M Hyundai TagAZ (Russia)
// YBW Volkswagen Belgium
// YCM Mazda Belgium
// YE2 Van Hool (buses)
// YK1 Saab-Valmet Finland
// YS2 Scania AB
// YS3 Saab
// YS4 Scania Bus
// YTN Saab NEVS
// YT9/007 Koenigsegg
// YU7 Husaberg (motorcycles)
// YV1 Volvo Cars
// YV4 Volvo Cars
// YV2 Volvo Trucks
// YV3 Volvo Buses
// Y6D Zaporozhets/AvtoZAZ (Ukraine)
// ZAA Autobianchi
// ZAM Maserati
// ZAP Piaggio/Vespa/Gilera
// ZAR Alfa Romeo
// ZBN Benelli
// ZCG Cagiva SpA / MV Agusta
// ZCF Iveco
// ZDM Ducati Motor Holdings SpA
// ZDF Ferrari Dino
// ZD0 Yamaha Italy
// ZD3 Beta Motor
// ZD4 Aprilia
// ZFA Fiat
// ZFC Fiat V.I.
// ZFF Ferrari
// ZGU Moto Guzzi
// ZHW Lamborghini
// ZJM Malaguti
// ZJN Innocenti
// ZKH Husqvarna Motorcycles Italy
// ZLA Lancia
// ZOM OM
// Z8M Marussia (Russia)
// 1B3 Dodge
// 1C3 Chrysler
// 1C6 Chrysler
// 1D3 Dodge
// 1FA Ford Motor Company
// 1FB Ford Motor Company
// 1FC Ford Motor Company
// 1FD Ford Motor Company
// 1FM Ford Motor Company
// 1FT Ford Motor Company
// 1FU Freightliner
// 1FV Freightliner
// 1F9 FWD Corp.
// 1G  General Motors USA
// 1GC Chevrolet Truck USA
// 1GT GMC Truck USA
// 1G1 Chevrolet USA
// 1G2 Pontiac USA
// 1G3 Oldsmobile USA
// 1G4 Buick USA
// 1G6 Cadillac USA
// 1G8 Saturn USA
// 1GM Pontiac USA
// 1GY Cadillac USA
// 1H  Honda USA
// 1HD Harley-Davidson
// 1J4 Jeep
// 1L  Lincoln USA
// 1ME Mercury USA
// 1M1 Mack Truck USA
// 1M2 Mack Truck USA
// 1M3 Mack Truck USA
// 1M4 Mack Truck USA
// 1M9 Mynatt Truck & Equipment
// 1N  Nissan USA
// 1NX NUMMI USA
// 1P3 Plymouth USA
// 1R9 Roadrunner Hay Squeeze USA
// 1VW Volkswagen USA
// 1XK Kenworth USA
// 1XP Peterbilt USA
// 1YV Mazda USA (AutoAlliance International)
// 1ZV Ford (AutoAlliance International)
// 2A4 Chrysler Canada
// 2B3 Dodge Canada
// 2B7 Dodge Canada
// 2C3 Chrysler Canada
// 2CN CAMI
// 2D3 Dodge Canada
// 2FA Ford Motor Company Canada
// 2FB Ford Motor Company Canada
// 2FC Ford Motor Company Canada
// 2FM Ford Motor Company Canada
// 2FT Ford Motor Company Canada
// 2FU Freightliner
// 2FV Freightliner
// 2FZ Sterling
// 2G  General Motors Canada
// 2G1 Chevrolet Canada
// 2G2 Pontiac Canada
// 2G3 Oldsmobile Canada
// 2G4 Buick Canada
// 2HG Honda Canada
// 2HK Honda Canada
// 2HJ Honda Canada
// 2HM Hyundai Canada
// 2M  Mercury
// 2NV Nova Bus Canada
// 2P3 Plymouth Canada
// 2T  Toyota Canada
// 2V4 Volkswagen Canada
// 2V8 Volkswagen Canada
// 2WK Western Star
// 2WL Western Star
// 2WM Western Star
// 3C4 Chrysler Mexico
// 3D3 Dodge Mexico
// 3FA Ford Motor Company Mexico
// 3FE Ford Motor Company Mexico
// 3G  General Motors Mexico
// 3H  Honda Mexico
// 3JB BRP Mexico (all-terrain vehicles)
// 3MZ Mazda Mexico
// 3N  Nissan Mexico
// 3P3 Plymouth Mexico
// 3VW Volkswagen Mexico
// 4F  Mazda USA
// 4JG Mercedes-Benz USA
// 4M  Mercury
// 4RK Nova Bus USA
// 4S  Subaru-Isuzu Automotive
// 4T  Toyota
// 4T9 Lumen Motors
// 4UF Arctic Cat Inc.
// 4US BMW USA
// 4UZ Frt-Thomas Bus
// 4V1 Volvo
// 4V2 Volvo
// 4V3 Volvo
// 4V4 Volvo
// 4V5 Volvo
// 4V6 Volvo
// 4VL Volvo
// 4VM Volvo
// 4VZ Volvo
// 538 Zero Motorcycles (USA)
// 5F  Honda USA-Alabama
// 5L  Lincoln
// 5N1 Nissan USA
// 5NP Hyundai USA
// 5T  Toyota USA - trucks
// 5YJ Tesla Motors
// 6AB MAN Australia
// 6F4 Nissan Motor Company Australia
// 6F5 Kenworth Australia
// 6FP Ford Motor Company Australia
// 6G1 General Motors-Holden (post Nov 2002)
// 6G2 Pontiac Australia (GTO & G8)
// 6H8 General Motors-Holden (pre Nov 2002)
// 6MM Mitsubishi Motors Australia
// 6T1 Toyota Motor Corporation Australia
// 6U9 Privately Imported car in Australia
// 8AD Peugeot Argentina
// 8AF Ford Motor Company Argentina
// 8AG Chevrolet Argentina
// 8AJ Toyota Argentina
// 8AK Suzuki Argentina
// 8AP Fiat Argentina
// 8AW Volkswagen Argentina
// 8A1 Renault Argentina
// 8GD Peugeot Chile
// 8GG Chevrolet Chile
// 935 Citroën Brazil
// 936 Peugeot Brazil
// 93H Honda Brazil
// 93R Toyota Brazil
// 93U Audi Brazil
// 93V Audi Brazil
// 93X Mitsubishi Motors Brazil
// 93Y Renault Brazil
// 94D Nissan Brazil
// 9BD Fiat Brazil
// 9BF Ford Motor Company Brazil
// 9BG Chevrolet Brazil
// 9BM Mercedes-Benz Brazil
// 9BR Toyota Brazil
// 9BS Scania Brazil
// 9BW Volkswagen Brazil
// 9FB Renault Colombia
//Nation of Origin (Country Code)

// Africa A - H
// AA-AH   South Africa
// AJ-AN   Ivory Coast
// AP-A0   not assigned
// BA-BE   Angola
// BF-BK   Kenya
// BL-BR   Tanzania
// BS-B0   not assigned
// CA-CE   Benin
// CF-CK   Malagasy
// CL-CR   Tunisia
// CS-C0   not assigned
// DA-DE   Egypt
// DF-DK   Morocco
// DL-DR   Zambia
// DS-D0   not assigned
// EA-EE   Ethiopia
// EF-EK   Mozambique
// EL-E0   not assigned
// FA-FE   Ghana
// FF-FK   Nigeria
// FF-FK   Madagascar
// FL-F0   not assigned
// GA-G0   not assigned
// HA-H0   not assigned
// Asia J - R
// JA-J0   Japan
// KA-KE   Sri Lanka
// KF-KK   Israel
// KL-KR   Korea (South)
// KS-K0   not assigned
// LA-L0   China
// MA-ME   India
// MF-MK   Indonesia
// ML-MR   Thailand
// MS-M0   not assigned
// NF-NK   Pakistan
// NL-NR   Turkey
// NS-N0   not assigned
// PA-PE   Philipines
// PF-PK   Singapore
// PL-PR   Malaysia
// PS-P0   not assigned
// RA-RE   United Arab Emirates
// RF-RK   Taiwan
// RL-RR   Vietnam
// RS-R0   not assigned
// Europe S - Z
// SA-SM   Great Britain
// SN-ST   Germany
// SU-SZ   Poland
// S1-S0   not assigned
// TA-TH   Switzerland
// TJ-TP   Czechoslovakia
// TR-TV   Hungary
// TW-T1   Portugal
// T2-T0   not assigned
// UA-UG   not assigned
// UH-UM   Denmark
// UN-UT   Ireland
// UU-UZ   Romania
// U1-U4   not assigned
// U5-U7   Slovakia
// U8-U0   not assigned
// VA-VE   Austria
// VF-VR   France
// VS-VW   Spain
// VX-V2   Yugoslavia
// V3-V5   Croatia
// V6-V0   Estonia
// WA-W0   Germany
// XA-XE   Bulgaria
// XF-XK   Greece
// XL-XR   Netherlands
// XS-XW   U.S.S.R.
// XX-X2   Luxembourg
// X3-X0   Russia
// YA-YE   Belgium
// YF-YK   Finland
// YL-YR   Malta
// YS-YW   Sweden
// YX-Y2   Norway
// Y3-Y5   Belarus
// Y6-Y0   Ukraine
// ZA-ZR   Italy
// ZS-ZW   not assigned
// ZX-Z2   Slovenia
// Z3-Z5   Lithuania
// Z6-Z0   not assigned
// North America 1 - 5
// 1A-10   United States
// 2A-20   Canada
// 3A-3W   Mexico
// 3X-37   Costa Rica
// 38-30   not assigned
// 4A-40   United States
// 5A-50   United States

// Oceania 6 - 7
// 6A-6W   Australia
// 6X-60   not assigned
// 7A-7E   New Zealand
// 7F-70   not assigned

// South America 8 - 9
// 8A-8E   Argentina
// 8F-8K   Chile
// 8L-8R   Ecuador
// 8S-8W   Peru
// 8X-82   Venezuela
// 83-80   not assigned
// 9A-9E   Brazil
// 9F-9K   Colombia
// 9L-9R   Paraguay
// 9S-9W   Uruguay
// 9X-92   Trinidad & Tobago
// 93-99   Brazil
// 90  not assigned


// First + Second + Third Position Digits  - WMI   Vehicle Manufacturer
// 10T Oshkosh
// 11V Ottawa
// 137 AM General, Hummer
// 15G Gillig
// 17N John Deere
// 18X WRV
// 19U Acura
// 1A4 Chrysler
// 1A8 Chrysler
// 1AC AMC
// 1AM AMC
// 1B3 Dodge
// 1B4 Dodge
// 1B6 Dodge
// 1B7 Dodge
// 1B7 Dodge
// 1BA Blue Bird
// 1BB Blue Bird
// 1BD Blue Bird
// 1C3 Chrysler
// 1C4 Chrysler
// 1C8 Chrysler
// 1C9 Chance
// 1CY Crane Carrier
// 1D3 Dodge
// 1D4 Dodge
// 1D5 Dodge
// 1D7 Dodge
// 1D8 Dodge
// 1EC Fleetwood
// 1F1 Ford
// 1F6 Ford
// 1FA Ford
// 1FB Ford
// 1FC Ford
// 1FD Ford
// 1FE Ford
// 1FM Ford
// 1FT Ford
// 1FU Freightliner
// 1FV Freightliner
// 1G1 Chevrolet
// 1G2 Pontiac
// 1G3 Oldsmobile
// 1G4 Buick
// 1G5 GMC, Pontiac
// 1G6 Cadillac
// 1G8 Chevrolet, Saturn
// 1GA Chevrolet
// 1GB Chevrolet
// 1GC Chevrolet
// 1GD GMC
// 1GE Cadillac
// 1GF Flexible
// 1GG Isuzu
// 1GH GMC, Oldsmobile
// 1GJ GMC
// 1GK GMC
// 1GM Pontiac
// 1GN Chevrolet
// 1GT GMC
// 1GY Cadillac
// 1HG Honda
// 1HS International
// 1HT International
// 1HV International
// 1J4 Jeep
// 1J7 Jeep
// 1J8 Jeep
// 1JC AMC, Jeep
// 1JD AMC
// 1JT AMC, Jeep
// 1L1 Lincoln
// 1LN Lincoln
// 1M1 Mack
// 1M2 Mack
// 1M3 Mack
// 1M8 MCI
// 1ME Mercury
// 1MR Lincoln
// 1N4 Nissan
// 1N6 Datsun, Nissan
// 1N9 Neoplan
// 1NK Kenworth
// 1NP Peterbilt
// 1NX Toyota
// 1P3 Plymouth
// 1P4 Plymouth
// 1P7 Plymouth
// 1P9 Panoz
// 1RF Roadmaster
// 1S9 Saleen
// 177 Thomas
// 1T8 Thomas
// 1TU TMC
// 1V1 Volkswagen
// 1VW Volkswagen
// 1WA Autostar
// 1WB Autostar
// 1WU White Volvo
// 1WV Winnebago
// 1XK Kenworth
// 1XM AMC
// 1XP Peterbilt
// 1Y1 Chevrolet, Geo
// 1YV Mazda
// 1Z3 Mitsubishi
// 1Z5 Mitsubishi
// 1Z7 Mitsubishi
// 1ZV Ford
// 1ZW Mercury
// 2A3 Chrysler
// 2A4 Chrysler
// 2A8 Chrysler
// 2B1 Orion
// 2B3 Dodge
// 2B4 Dodge
// 2B5 Dodge
// 2B6 Dodge
// 2B7 Dodge
// 2B8 Dodge
// 2BC AMC, Jeep
// 2C1 Chevrolet, Geo
// 2C3 Chrysler
// 2C4 Chrysler
// 2C7 Pontiac
// 2C8 Chrysler
// 2CC AMC, Eagle
// 2CK Geo, Pontiac
// 2CM AMC
// 2CN Chevrolet, Geo
// 2D4 Dodge
// 2D6 Dodge
// 2D7 Dodge
// 2D8 Dodge
// 2E3 Eagle
// 2FA Ford
// 2FD Ford
// 2FM Ford
// 2FT Ford
// 2FU Freightliner
// 2FV Freightliner
// 2FW Sterling
// 2FZ Sterling
// 2G0 GMC
// 2G1 Chevrolet
// 2G2 Pontiac
// 2G3 Oldsmobile
// 2G4 BuickX
// 2G5 GMC
// 2G7 Pontiac
// 2G8 Chevrolet
// 2GA Chevrolet
// 2GB Chevrolet
// 2GD GMC
// 2GJ GMC
// 2GK GMC
// 2GN Chevrolet
// 2GT GMC
// 2HG Honda
// 2HH Acura
// 2HJ Honda
// 2HK Honda
// 2HM Hyundai
// 2HN Acura
// 2HS International
// 2HT International
// 2J4 Jeep
// 2LM Lincoln
// 2M2 Mack
// 2ME Mercury
// 2MH Mercury
// 2MR Mercury
// 2NK Kenworth
// 2NP Peterbilt
// 2P3 Plymouth
// 2P4 Plymouth
// 2P5 Plymouth
// 2P9 Prevost
// 2PC Prevost
// 2S2 Suzuki
// 2S3 Suzuki
// 2T1 Toyota
// 2T2 Lexus
// 2WK Western Star Trucks
// 2WL Western Star Trucks
// 2XK Kenworth
// 2XM Eagle
// 2XP Peterbilt
// 3A4 Chrysler
// 3A8 Chrysler
// 3AB Dina
// 3AL Freightliner
// 3B3 Dodge
// 3B4 Dodge
// 3B6 Dodge
// 3B7 Dodge
// 3BK Kenworth
// 3BP Peterbilt
// 3C3 Chrysler
// 3C4 Chrysler
// 3C8 Chrysler
// 3CA Chrysler
// 3D3 Dodge
// 3D5 Dodge
// 3D6 Dodge
// 3D7 Dodge
// 3FA Ford
// 3FC Ford
// 3FD Ford
// 3FE Ford, Freightliner
// 3FR Ford
// 3FT Ford
// 3G1 Chevrolet
// 3G2 Pontiac
// 3G4 Buick
// 3G5 Buick
// 3G7 Pontiac
// 3GB Chevrolet
// 3GC Chevrolet
// 3GD GMC
// 3GE Chevrolet
// 3GK GMC
// 3GN Chevrolet
// 3GT GMC
// 3GY Cadillac
// 3HA International
// 3HG Honda
// 3HM Honda
// 3HS International
// 3HT International
// 3LN Lincoln
// 3MA Mercury
// 3ME Mercury
// 3N1 Nissan
// 3NK Kenworth
// 3NM Peterbilt
// 3P3 Plymouth
// 3TM Toyota
// 3VW Volkswagen
// 3WK Kenworth
// 45V Utilimaster
// 46G Gillig
// 49H Sterling
// 4A3 Mitsubishi
// 4A4 Mitsubishi
// 4B3 Dodge
// 4C3 Chrysler
// 4CD Oshkosh
// 4DR Genesis, International
// 4E3 Eagle
// 4F2 Mazda
// 4F4 Mazda
// 4G1 Chevrolet
// 4G2 Pontiac
// 4GD GMC
// 4GT Isuzu, WhiteGMC
// 4JG Mercedes-Benz
// 4KB Chevrolet
// 4KD GMC
// 4KL Isuzu
// 4M2 Mercury
// 4N1 Nissan
// 4N2 Nissan
// 4NU Isuzu
// 4P3 Plymouth
// 4S1 Isuzu
// 4S2 Isuzu
// 4S3 Subaru
// 4S4 Subaru
// 4S6 Honda
// 4S7 Spartan
// 4SL Magnum
// 4T1 Toyota
// 4T3 Toyota
// 4TA Toyota
// 4US BMW
// 4UZ Freightliner
// 4V1 Volvo, WhiteGMC
// 4V2 Volvo, WhiteGMC
// 4V4 Volvo, WhiteGMC
// 4V5 Volvo, WhiteGMC
// 4VA Volvo
// 4VG Volvo, WhiteGMC
// 4VH Volvo
// 4VL Volvo
// 4VM Volvo
// 4VZ Spartan
// 5AS GEM
// 5B4 Workhorse
// 5CK Western Star Trucks
// 5FN Honda
// 5FY New Flyer
// 5GA Buick
// 5GR Hummer
// 5GT Hummer
// 5GZ Saturn
// 5J6 Honda
// 5J8 Acura
// 5KJ Western Star Trucks
// 5KK Western Star Trucks
// 5LM Lincoln
// 5LT Lincoln
// 5N1 Nissan
// 5N3 Infiniti
// 5NM Hyundai
// 5NP Hyundai
// 5PV Hino
// 5S3 Saab
// 5SX Amercian LeFrance
// 5T4 Workhorse
// 5TB Toyota
// 5TD Toyota
// 5TE Toyota
// 5TF Toyota
// 5UM BMW
// 5UX BMW
// 5Y2 Pontiac
// 6G2 Pontiac
// 6MM Mitsubishi
// 6MP Mercury
// 9BF Ford
// 9BW Volkswagen
// 9DW Volkswagen
// J81 Chevrolet,Geo
// J87 Isuzu
// J8B Chevrolet
// J8D GMC
// J8Z Chevrolet
// JA3 Mitsubishi
// JA4 Mitsubishi
// JA7 Mitsubishi
// JAA Isuzu
// JAB Isuzu
// JAC Isuzu
// JAE Acura
// JAL Isuzu
// JB3 Dodge
// JB4 Dodge
// JB7 Dodge
// JC2 Ford
// JD1 Daihatsu
// JD2 Daihatsu
// JE3 Eagle
// JF1 Subaru
// JF2 Subaru
// JF3 Subaru
// JF4 Saab
// JG1 Chevrolet, Geo
// JG7 Pontiac
// JGC Geo
// JH4 Acura
// JHB Hino
// JHL Honda
// JHM Honda
// JJ3 Chrysler
// JL6 Mitsubishi
// JLS Sterling
// JM1 Mazda
// JM2 Mazda
// JM3 Mazda
// JN1 Datsun, Nissan
// JN3 Nissan
// JN4 Nissan
// JN6 Datsun, Nissan
// JN8 Nissan
// JNA Nissan
// JNK Infiniti
// JNR Infiniti
// JNX Infiniti
// JP3 Plymouth
// JP4 Plymouth
// JP7 Plymouth
// JR2X    Isuzu
// JS2 Suzuki
// JS3 Suzuki
// JS4 Suzuki
// JT2 Toyota
// JT3 Toyota
// JT4 Toyota
// JT5 Toyota
// JT6 Lexus
// JT8 Lexus
// JTD Toyota
// JTE Toyota
// JTH Lexus
// JTJ Lexus
// JTK Scion
// JTL Scion
// JTM Toyota
// JTN Toyota
// JW6 Mitsubishi
// JW7 Mitsubishi
// KL1 Chevrolet
// KL2 Pontiac
// KL5 Suzuki
// KL7 Asuna
// KLA Daewoo
// KM8 Hyundai
// KMF Hyundai
// KMH Hyundai
// KNA Kia
// KND Hyundai, Kia
// KNJ Ford
// KPH Mitsubishi
// LES Isuzu
// LM5 Isuzu
// ML3 Dodge
// SA9 Morgan
// SAJ Jaguar
// SAL Land Rover
// SAT Triumph
// SAX Sterling
// SCA Rolls-Royce
// SCB Bentley
// SCC Lotus
// SCF Aston Martin
// SDL TVR Engineering
// SHH Honda
// SHS Honda
// SJN Nissan UK
// TRU Audi
// VF1 Renault
// VF7 Citroën
// VF3 Peugeot
// VG6 Mack
// VSS Seat
// W06 Cadillac
// WA1 Audi
// WAU Audi
// WBA BMW
// WBS BMW
// WBX BMW
// WD0 Dodge
// WD1 Dodge
// WD2 Dodge
// WD5 Dodge
// WD8 Dodge
// WDB Maybach, Mercedes-Benz
// WDC Mercedes-Benz
// WDD Mercedes-Benz
// WDP Dodge
// WDX Dodge
// WDY Dodge
// WF1 Merkur
// WKK Fahrzeugwerke
// WME Mercedes-Benz
// WMW Mini
// WP0 Porsche
// WP1 Porsche
// WUA Audi
// WV2 Volkswagen
// WV3 Volkswagen
// WVG Volkswagen
// WVW Volkswagen
// XTA Lada
// YB3 Volvo
// YS3 Saab
// YV1 Volvo
// YV2 Volvo
// YV4 Volvo
// YV5 Volvo
// ZA9 Lamborghini
// ZAM Maserati
// ZAR Alfa Romeo
// ZC2 Chrysler
// ZFA Fiat
// ZFF Ferrari
// ZHWX    Lamborghini









// VIN Character 10 - Manufacturing Country Codes
//http://support.alldata.com/alldata-repair-online-article/vin-to-year-chart
//The 10th character in the 17-character VIN represents the vehicle model-year.
// Before 1981, the VIN format was not standardized and varied by manufacturer.

// Note: VINs do not include the letters I (i), O (o), Q (q), U (u) or Z (z), or the number 0, so that they will not be confused with similar looking numbers/letters.

//A = 1980
//B = 1981
//C = 1982
//D = 1983
//E = 1984
//F = 1985
//G = 1986
//H = 1987
//J = 1988
//K = 1989
//L = 1990
//M = 1991
//N = 1992
//P = 1993
//R = 1994
//S = 1995
//T = 1996
//V = 1997
//W = 1998
//X = 1999
//Y = 2000
//1 = 2001
//2 = 2002
//3 = 2003
//4 = 2004
//5 = 2005
//6 = 2006
//7 = 2007
//8 = 2008
//9 = 2009
//A = 2010
//B = 2011
//C = 2012
//D = 2013
//E = 2014
//F = 2015
//G = 2016
//H = 2017
//J = 2018
//K = 2019
