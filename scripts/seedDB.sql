DROP DATABASE IF EXISTS BusinessRelationshipManagerDB;
CREATE DATABASE BusinessRelationshipManagerDB;
USE BusinessRelationshipManagerDB;

CREATE TABLE numbers (
  id int auto_increment,
  PRIMARY KEY (id)
);

CREATE TABLE industries (
  id int auto_increment,
  industry varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE businessTypes (
  id int auto_increment,
  businessType varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE businessFunctions (
  id int auto_increment,
  businessFunction varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE contactTypes (
  id int auto_increment,
  contactType varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id int auto_increment,
  role varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE businesss (
  id int auto_increment,
  businessName varChar(255),
  address varChar(255),
  city varChar(255),
  state varChar(255),
  zip varChar(255),
  phoneNumber varChar(30),
  notes longtext,
  businessTypeID int,
  industryID int,
  priority int,
  PRIMARY KEY (id)
);

CREATE TABLE contacts (
  id int auto_increment,
  contactName varChar(255),
  phoneNumber varChar(30),
  email varChar(255),
  contactWhen varChar(255),
  notes longtext,
  roleID int,
  businessFunctionID int,
  contactTypeID int,
  businessID int,
  PRIMARY KEY (id)
);

INSERT INTO numbers (id)
VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27),(28),(29),(30),(31),(32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47),(48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60),(61),(62),(63),(64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100);

INSERT INTO roles (role)
VALUES ('CEO'),('CFO'),('COO'),('Operations Manager'),('Office Manager'),('Project Manager'),('Marketing Manager'),('Shipping Manager'),('Receiving Manger'),('Sales Rep'),('Buyer'),('Logistics'),('Engineer'),('Technical'),('Quality Control'),('Receptionist');

INSERT INTO industries (industry)
VALUES ('Apparel'),('Engineering'),('Jewelry'),('Logistics'),('Manufacturing'),('Medical Supplies'),('Packaging'),('Pallets'),('Printing'),('Warehouse supplies');

INSERT INTO businessFunctions (businessFunction)
VALUES ('Owner'),('Partner'),('Customer'),('Supplier'),('Accounting'),('Marketing'),('Sales'),('Logistics'),('Manufacturing'),('HR'),('Payroll'),('Mentor'),('Motivational'),('Events');

INSERT INTO contactTypes (contactType)
VALUES ('Primary Contact'),('Secondary Contact'),('For payment'),('To schedule a shipment'),('For quality issues');

INSERT INTO businessTypes (businessType)
VALUES ('Established'),('Potential'),('Introduction'),('Competitor'),('Keep on eye on');

INSERT INTO businesss (businessName, address, city, state, zip, phoneNumber, businessTypeID, industryID, priority)
VALUES ('laudic','262 Oxford Drive','Palm Harbor','FL','34683','(401) 539-7694',1,5,2),('plape','795 Smith Dr.','Hallandale','FL','33009','(844) 359-7553',3,7,9),('premicious','8882 Bishop St.','Royersford','PA','19468','(515) 869-0292',1,8,4),('amphindu','7 Philmont Ave.','Atlanta','GA','30303','(305) 243-7662',3,2,3),('venicious','8209 Euclid Lane','West Islip','NY','11795','(630) 246-7804',3,7,8),('eurocee','35 Henry Lane','Baldwin','NY','11510','(907) 571-2690',2,10,7),('bellity','8405 Market Lane','Key West','FL','33040','(990) 999-2109',2,5,9),('kayend','8767 King Street','Goldsboro','NC','27530','(743) 898-6500',1,5,4),('yalium','9113 East Summerhouse Street','Avon','IN','46123','(929) 785-9557',1,1,2),('uberize','2 South Fairway St.','Raleigh','NC','27603','(642) 456-4996',5,5,7),('fazzy','66 E. Hudson Road','Tuckerton','NJ','08087','(577) 396-6115',5,5,3),('interoid','84 W. Gainsway Drive','Bismarck','ND','58501','(357) 221-0084',1,4,7),('hydrombee','398 Oakwood St.','Cordova','TN','38016','(477) 951-1262',4,10,9),('perity','860 Annadale St.','Hermitage','TN','37076','(480) 443-1861',4,7,5),('finose','187 Rock Maple Rd.','Garfield','NJ','07026','(748) 931-7944',5,1,2),('antenyx','509 Constitution St.','Canandaigua','NY','14424','(773) 247-0937',4,1,6),('anent','8465 Kirkland Street','Yorktown','VA','23693','(737) 404-2675',4,1,1),('meefic','934 Manor Station Court','Perth Amboy','NJ','08861','(841) 922-7687',1,9,4),('astrodel','174 Trusel Street','Youngstown','OH','44512','(580) 257-4268',3,6,5),('malize','934 Arlington Rd.','Cranston','RI','02920','(630) 268-9562',4,6,1),('sufer','76 Beach Lane','Manitowoc','WI','54220','(300) 849-6328',3,9,4),('anu','297 Central Dr.','Clemmons','NC','27012','(281) 687-1856',4,9,3),('yakivu','9050 E. Woodside St.','Stratford','CT','06614','(328) 350-8103',5,7,2),('prondo','219 W. North Court','Nanuet','NY','10954','(254) 693-6236',4,2,3),('autolium','8254 Ashley Avenue','Solon','OH','44139','(755) 787-5296',5,7,7),('syner','83 N. Plymouth St.','Loxahatchee','FL','33470','(425) 613-0384',4,9,3),('cynor','771 10th St.','West Haven','CT','06516','(797) 824-1271',3,7,6),('trudeo','7442 San Juan St.','Fresh Meadows','NY','11365','(683) 545-1431',4,2,10),('conill','97 Spring St.','Middle Village','NY','11379','(375) 464-5864',4,8,2),('isomm','9529 S. Purple Finch Street','Brighton','MA','02135','(412) 600-6118',3,8,2),('polyist','7480 Manor Road','Coatesville','PA','19320','(278) 950-1914',1,4,2),('protocy','844 Glenridge Circle','Southaven','MS','38671','(674) 611-2017',2,4,3),('supramm','653 NW. Ketch Harbour Road','Maplewood','NJ','07040','(459) 737-3217',5,6,1),('inosis','8250 Cedarwood Court','Algonquin','IL','60102','(499) 519-1898',5,6,8),('symer','17 Depot Drive','Providence','RI','02904','(443) 968-7689',2,5,5),('amill','820 South Spruce St.','Oconomowoc','WI','53066','(476) 840-4735',5,10,10),('cryoxo','8423 Edgewood Road','New Bern','NC','28560','(569) 755-5017',5,1,8),('infralium','426 Linda Ave.','Bensalem','PA','19020','(650) 977-4444',4,6,7),('lunive','341 Market Street','Winter Park','FL','32792','(905) 776-0694',3,6,7),('podive','87 Sutor St.','Mechanicsburg','PA','17050','(789) 801-5478',5,1,5),('telendu','68 N. Courtland Dr.','Palmetto','FL','34221','(724) 793-2797',4,8,2),('neodoo','7852 Studebaker St.','Colorado Springs','CO','80911','(747) 692-8311',2,2,7),('metanti','529 Orange Court','Herndon','VA','20170','(419) 704-1222',2,6,9),('abalium','650 Wilson Lane','Ephrata','PA','17522','(382) 496-5254',5,8,5),('ceder','17 W. Vermont Dr.','Smyrna','GA','30080','(975) 969-6411',5,1,7),('kimm','23 E. Orange Lane','Coram','NY','11727','(627) 903-0154',1,3,2),('archent','171 Elmwood St.','Buffalo','NY','14215','(877) 631-8006',3,9,7),('albil','952 W. Walnutwood St.','Bethpage','NY','11714','(265) 473-3006',2,7,7),('nonicious','45 Rockaway Dr.','Cleveland','TN','37312','(918) 232-7591',1,9,4),('skicero','665 Applegate Court','Piedmont','SC','29673','(482) 261-6197',1,8,2),('quacee','7951 Alton Street','Ann Arbor','MI','48103','(611) 869-7533',2,10,2),('sugescent','7616 East Delaware St.','Spring Valley','NY','10977','(812) 775-4198',5,7,8),('dynovee','795 East St Paul Street','Southfield','MI','48076','(322) 686-3591',5,6,2),('monous','23 Jockey Hollow Court','Milledgeville','GA','31061','(462) 861-0178',3,9,5),('idiondu','24 Green Hill Avenue','Tuscaloosa','AL','35405','(729) 581-9085',5,7,2),('skyist','8807 North Rock Creek St.','Bowling Green','KY','42101','(202) 772-8431',5,7,3),('decero','49 Rockwell St.','High Point','NC','27265','(272) 774-3421',3,7,4),('kava','513 Tanglewood Court','Bethel Park','PA','15102','(805) 660-8492',1,10,9),('aginti','301 Clay Ave.','Dracut','MA','01826','(485) 891-6250',1,1,6),('eambu','65 Vernon Drive','Butler','PA','16001','(565) 375-0828',4,2,4),('dudo','65 Clay Lane','Westland','MI','48185','(441) 814-6385',4,9,2),('zalane','239 Arlington Ave.','New Albany','IN','47150','(423) 208-6466',1,4,1),('ofic','96 Oak Valley Street','Oviedo','FL','32765','(883) 822-3664',2,7,4),('dolore','7053 Wagon Drive','Stamford','CT','06902','(468) 584-8247',3,6,9),('mufic','216 Broad Ave.','Schenectady','NY','12302','(801) 473-5287',4,9,1),('pedore','64 King Dr.','Kearny','NJ','07032','(238) 526-8425',4,10,1),('sociveo','9531 N. Sunnyslope Dr.','Jonesborough','TN','37659','(595) 488-0707',1,5,2),('calcise','519 Valley View Avenue','Des Moines','IA','50310','(245) 745-8793',1,9,2),('audic','756 NE. Grandrose St.','Munster','IN','46321','(776) 460-7535',4,8,2),('twizu','97 Ocean Avenue','Apopka','FL','32703','(820) 238-9148',2,2,2),('leeva','9972 Redwood Dr.','Lafayette','IN','47905','(903) 448-6372',4,3,1),('misore','309 E. Williams Street','Jamaica','NY','11432','(959) 974-1022',5,9,2),('hypolith','616 Cottage Street','Cockeysville','MD','21030','(538) 261-3408',5,6,6),('mistilia','42 Locust Drive','Madison Heights','MI','48071','(786) 441-5968',5,5,3),('dialane','695 E. Fulton Ave.','Glendale','AZ','85302','(344) 416-2928',1,7,8),('colity','9905 Del Monte Street','Boca Raton','FL','33428','(259) 818-1049',2,2,9),('cryptozu','9289 Linda Drive','Waterbury','CT','06705','(992) 965-9572',2,3,5),('panicious','37 Inverness St.','Hilliard','OH','43026','(633) 214-5812',4,2,8),('perilith','852 Military St.','Moncks Corner','SC','29461','(515) 959-5873',4,9,8),('paleore','8298 Sage Ave.','Lebanon','PA','17042','(751) 645-1551',1,4,9),('microcy','33 Sheffield St.','Helotes','TX','78023','(934) 333-5215',1,1,1),('contrajo','8277 Edgemont Avenue','Hyde Park','MA','02136','(451) 783-5232',3,9,3),('felescent','7674 Surrey St.','Galloway','OH','43119','(459) 988-8024',1,6,4),('fortosis','9693 East Gainsway Drive','Ellenwood','GA','30294','(956) 481-7935',3,6,1),('bender','92 Central Street','Goose Creek','SC','29445','(410) 364-4259',5,9,1),('pixozu','8195 Depot Street','Holly Springs','NC','27540','(731) 977-6066',2,9,6),('genu','88 Fordham Street','North Ridgeville','OH','44039','(805) 871-0524',2,1,2),('epizio','7106 Longfellow St.','West Chester','PA','19380','(250) 698-5432',3,9,3),('omnimbo','57 Morris Avenue','Oxnard','CA','93035','(546) 962-0348',2,10,9),('kwimbo','862 Talbot St.','Manchester','NH','03102','(775) 226-8624',2,8,7),('acerescent','91 Water Ave.','Pleasanton','CA','94566','(609) 746-4199',4,4,1),('skata','740 Wagon Dr.','Richmond','VA','23223','(540) 447-3397',4,1,6),('gradideo','28 E. Belmont Lane','Grand Blanc','MI','48439','(785) 714-6247',5,4,2),('forent','8950 Oakland Street','Mokena','IL','60448','(391) 758-9699',1,2,2),('domosis','8774 Surrey Avenue','Hackensack','NJ','07601','(712) 630-5572',4,6,2),('tambo','268 Homewood Dr.','Albany','NY','12203','(986) 444-7954',1,2,10),('aicy','84 Sycamore Avenue','Coventry','RI','02816','(904) 475-9689',2,5,10),('comive','783 St Louis Dr.','Bangor','ME','04401','(837) 977-6462',2,1,5),('disill','797 Wentworth St.','Urbandale','IA','50322','(869) 261-2140',3,8,6),('dynare','9507 Richardson Lane','Far Rockaway','NY','11691','(780) 954-4752',4,9,1),('trido','8552 SW. Hillside St.','South Plainfield','NJ','07080','(427) 422-6019',3,5,4),('myescent','630 Grove Ave.','Antioch','TN','37013','(829) 574-9400',4,6,6),('ener','99 Pine Ave.','Zionsville','IN','46077','(526) 224-7444',2,3,2),('transill','638 Mayfair Road','Rapid City','SD','57701','(577) 303-7084',4,2,9),('execuveo','62 6th St.','Bloomington','IN','47401','(571) 812-3262',1,2,2),('mimba','5 Rockaway Avenue','Englishtown','NJ','07726','(423) 893-3893',3,4,5),('syil','8281 West Deerfield Rd.','Corpus Christi','TX','78418','(626) 291-3937',4,2,4);

INSERT INTO contacts (contactName,phoneNumber,email,contactWhen,roleID,businessFunctionID,contactTypeID,businessID)
VALUES ('Rhian O Neill','208-371-8247','RONeill@email.com','Main contact',11,13,1,1),('Fionn Edwards','801-381-3256','FEdwards@email.com','Only when there are problems',6,7,1,1),('Rohan Estrada','435-891-9533','REstrada@email.com','Main contact',8,1,4,1),('Richie Irvine','208-759-5052','RIrvine@email.com','Main contact',16,6,4,1),('Deanne Lynch','208-697-9035','DLynch@email.com','Main contact',14,8,5,1),('Henna Crawford','435-820-6312','HCrawford@email.com','Secondary Contact,Only for extremely important problems,For any payment related matters',5,4,2,1),('Colin Cuevas','208-684-5850','CCuevas@email.com','Main contact',10,6,1,1),('Tori Walsh','801-292-2138','TWalsh@email.com','Main contact',8,15,4,4),('Jonas Lindsey','208-277-2701','JLindsey@email.com','Main contact',15,6,5,20),('Beatrix Lowery','435-685-2005','BLowery@email.com','Only for extremely important problems,For any payment related matters',1,8,4,22),('Lenny Mcphee','208-589-5020','LMcphee@email.com','Main contact',10,7,1,24),('Arianna Barton','435-795-3815','ABarton@email.com','Only for extremely important problems,For any payment related matters',2,3,3,38),('Mabel Drew','208-289-5885','MDrew@email.com','Main contact',8,1,4,29),('Finnian Hunter','435-460-4156','FHunter@email.com','Main contact',12,13,4,11),('Hester Pike','208-763-5398','HPike@email.com','Secondary Contact,Only for extremely important problems,For any payment related matters',4,12,2,28),('Cecelia Mcloughlin','435-998-8883','CMcloughlin@email.com','Main contact',16,2,4,30),('Roy Rowland','208-385-2589','RRowland@email.com','Main contact',14,11,5,6),('Oakley Hughes','801-212-7361','OHughes@email.com','Only when there are problems',6,4,1,3),('Carole Lozano','801-573-2848','CLozano@email.com','Main contact',8,4,4,31),('Ana Buxton','435-927-3650','ABuxton@email.com','Main contact',12,8,4,27),('Deon Swanson','208-751-5164','DSwanson@email.com','Main contact',14,12,5,7),('Danyl Shelton','435-891-4779','DShelton@email.com','Main contact',8,11,4,42),('Deanna Contreras','208-493-7013','DContreras@email.com','Main contact',12,11,4,12),('David Mclellan','208-438-7122','DMclellan@email.com','Secondary Contact,Only for extremely important problems,For any payment related matters',5,3,2,43),('Kara Wilson','801-984-2285','KWilson@email.com','Main contact',13,14,5,4),('Adela Potts','801-874-5217','APotts@email.com','Only when there are problems',7,15,2,5),('Kimberly Baker','801-341-8535','KBaker@email.com','Only for extremely important problems,For any payment related matters',1,10,4,3),('Beck Cline','435-639-4320','BCline@email.com','Only when there are problems',6,9,1,9),('Georga Austin','435-667-6521','GAustin@email.com','Main contact',8,7,4,18),('Martina Hunt','208-408-8921','MHunt@email.com','Main contact',9,6,4,15),('Anastasia Aldred','435-456-8061','AAldred@email.com','Secondary Contact,Only for extremely important problems,For any payment related matters',5,7,2,34),('Serena Barry','435-847-2526','SBarry@email.com','Only when there are problems',6,10,1,10),('Miley Acevedo','801-670-8338','MAcevedo@email.com','Main contact',9,13,4,17),('Vikki Colley','435-779-6007','VColley@email.com','Only for extremely important problems,For any payment related matters',2,9,3,2),('Otis Li','208-533-2978','OLi@email.com','Secondary Contact,Only for extremely important problems,For any payment related matters',5,7,2,13),('Israr Callaghan','801-412-0570','ICallaghan@email.com','Main contact',12,14,4,32),('Anum Bloom','435-445-0177','ABloom@email.com','Main contact',15,7,5,21),('Hamish East','801-603-8312','HEast@email.com','Main contact',14,4,5,8),('Abbas Everett','208-461-8442','AEverett@email.com','Main contact',13,12,5,19),('Sami Moore','801-229-6311','SMoore@email.com','Only when there are problems',6,2,1,13),('Alice Read','208-610-3310','ARead@email.com','Main contact',9,1,4,43),('Monika Ayers','801-671-7805','MAyers@email.com','Main contact',15,1,5,33),('Felicity Mullins','435-361-5162','FMullins@email.com','Only when there are problems',7,13,2,31),('Reon Rudd','435-979-9336','RRudd@email.com','Main contact',14,5,5,43),('Krzysztof Cantu','208-239-1834','KCantu@email.com','Secondary Contact,Only for extremely important problems,For any payment related matters',4,11,2,26),('Kaydan Watt','801-794-6794','KWatt@email.com','Main contact',16,4,4,38),('Jarred Landry','435-248-1845','JLandry@email.com','Only for extremely important problems,For any payment related matters',3,14,4,12),('Ashton Christensen','801-412-7351','AChristensen@email.com','Main contact',8,13,4,38),('Lilly Rubio','435-858-0384','LRubio@email.com','Main contact',14,15,5,18),('Marion Cannon','801-585-2625','MCannon@email.com','Main contact',8,12,4,43);
