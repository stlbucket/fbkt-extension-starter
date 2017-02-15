--||--
drop schema if exists soro cascade;
--||--
CREATE SCHEMA soro;
--||--
SET search_path TO soro, fbkt_login, fbkt_core_db, public;
--||--
CREATE TABLE wslcb_inventory_type (
	id 			integer  NOT NULL,
	name 			varchar(100)  NOT NULL,
	inventory_type_id	integer NOT NULL,
	CONSTRAINT 		pk_wslcb_inventory_type PRIMARY KEY ( id )
 );
--||--
CREATE TABLE inventory_type (
	id 			serial  NOT NULL,
	name 			varchar(100)  NOT NULL,
	CONSTRAINT 		pk_inventory_type PRIMARY KEY ( id )
 );
--||--
CREATE TABLE inventory_item (
	id 															serial  NOT NULL,
	inventory_type_id 							integer NOT NULL,
	weight_grams										float NULL,
	price_per_gram_default					float NULL,
	CONSTRAINT 		pk_inventory_item PRIMARY KEY ( id )
);
--||--
CREATE TABLE wslcb_inventory_item (
	id 															serial  NOT NULL,
	inventory_item_id								integer NOT NULL,
	import_timestamp								timestamp NOT NULL DEFAULT current_timestamp,
	wslcb_id 													text NOT NULL,
	wslcb_inventory_type_id 						integer NOT NULL,
  inventorystatustime					text,
	remaining_quantity						text,
	parentid 										text NULL,
	sessiontime 								text NULL,
	plantid											text NULL,
	source_id										text NULL,
	wet													integer,
	is_medical										integer NULL,
	currentroom									text,
	usable_weight								text,
	net_package									text,
	transactionid								text,
	seized												text,
	strain												text,
	transactionid_original				text,
  location											text,
  inventoryparentid						text,
  inventorytype								text,
  deleted											integer,
  productname									text,
  is_sample										text,
  inventorystatus						integer,
	CONSTRAINT 		pk_wslcb_inventory_item PRIMARY KEY ( id )
 );
--||--
CREATE TYPE quote_status AS ENUM ('QUOTED', 'CONFIRMED', 'CANCELED_CUSTOMER', 'CANCELED_PROVIDER', 'EXPIRED');
--||--
CREATE TABLE quote (
	id 			serial  NOT NULL,
	uid 				uuid UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
	quote_timestamp      	timestamp NOT NULL DEFAULT current_timestamp,
	status								quote_status NOT NULL DEFAULT 'QUOTED',
	expiration_timestamp      	timestamp NULL,
	quoter_contact_id		integer NOT NULL,
	quotee_contact_id		integer NOT NULL,
	CONSTRAINT 		pk_quote PRIMARY KEY ( id )
 );
--||--
CREATE TABLE quote_line_item (
	id 			serial  NOT NULL,
	uid 				uuid UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
	quote_id    integer NOT NULL,
	inventory_type_id integer NOT NULL,
	CONSTRAINT 		pk_quote_line_item PRIMARY KEY ( id )
 );
--||--
CREATE TABLE quoted_inventory_item_portion (
	id 			serial  NOT NULL,
	uid 				uuid UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
	quote_line_item_id    integer NOT NULL,
	inventory_item_id integer NOT NULL,
	quoted_weight_grams						float NOT NULL,
	quoted_price_per_gram						float NOT NULL,
	CONSTRAINT 		pk_quoted_inventory_item_portion PRIMARY KEY ( id )
 );
--||--
CREATE TABLE claimed_inventory_item_portion (
	id 			serial  NOT NULL,
	uid 				uuid UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
	quoted_inventory_item_portion_id    integer NOT NULL,
	claimed_weight_grams						float NOT NULL,
	claimed_by_contact_id						integer NOT NULL,
	CONSTRAINT 		pk_claimed_inventory_item_portion PRIMARY KEY ( id )
 );
--||--
ALTER TABLE wslcb_inventory_type
ADD CONSTRAINT fk_wslcb_inventory_item_inventory_type
FOREIGN KEY ( inventory_type_id )
REFERENCES inventory_type( id );
--||--
ALTER TABLE inventory_item
ADD CONSTRAINT fk_inventory_item_inventory_type
FOREIGN KEY ( inventory_type_id )
REFERENCES inventory_type( id );
--||--
ALTER TABLE wslcb_inventory_item
ADD CONSTRAINT fk_wslcb_inventory_item_inventory_item
FOREIGN KEY ( inventory_item_id )
REFERENCES inventory_item( id );
--||--
ALTER TABLE wslcb_inventory_item
ADD CONSTRAINT fk_wslcb_inventory_item_wslcb_inventory_item_type
FOREIGN KEY ( wslcb_inventory_type_id )
REFERENCES wslcb_inventory_type( id );
--||--
ALTER TABLE quote
ADD CONSTRAINT fk_quoter_contact
FOREIGN KEY ( quoter_contact_id )
REFERENCES contact( id );
--||--
ALTER TABLE quote
ADD CONSTRAINT fk_quotee_contact
FOREIGN KEY ( quotee_contact_id )
REFERENCES contact( id );
--||--
ALTER TABLE quote_line_item
ADD CONSTRAINT fk_quote_line_item_quote
FOREIGN KEY ( quote_id )
REFERENCES quote( id );
--||--
ALTER TABLE quote_line_item
ADD CONSTRAINT fk_quote_line_item_inventory_type
FOREIGN KEY ( inventory_type_id )
REFERENCES inventory_type( id );
--||--
ALTER TABLE claimed_inventory_item_portion
ADD CONSTRAINT fk_claimed_inventory_item_portion_quoted_inventory_portion
FOREIGN KEY ( quoted_inventory_item_portion_id )
REFERENCES quoted_inventory_item_portion( id );
--||--
ALTER TABLE claimed_inventory_item_portion
ADD CONSTRAINT fk_claimed_inventory_item_portion_contact
FOREIGN KEY ( claimed_by_contact_id )
REFERENCES contact( id );
--||--
ALTER TABLE quoted_inventory_item_portion
ADD CONSTRAINT fk_quoted_inventory_portion_quote_line_item
FOREIGN KEY ( quote_line_item_id )
REFERENCES quote_line_item( id );
--||--
ALTER TABLE quoted_inventory_item_portion
ADD CONSTRAINT fk_quoted_inventory_portion_inventory_item
FOREIGN KEY ( inventory_item_id )
REFERENCES inventory_item( id );
--||--
INSERT INTO inventory_type (name) VALUES ('Kief');
INSERT INTO inventory_type (name) VALUES ('Flower');
INSERT INTO inventory_type (name) VALUES ('Clone');
INSERT INTO inventory_type (name) VALUES ('Other Plant Material(stems, leaves, etc) to be processed');
INSERT INTO inventory_type (name) VALUES ('Seed');
INSERT INTO inventory_type (name) VALUES ('Plant Tissue');
INSERT INTO inventory_type (name) VALUES ('Mature Plant');
INSERT INTO inventory_type (name) VALUES ('Flower Lot');
INSERT INTO inventory_type (name) VALUES ('Other Plant Material Lot');
INSERT INTO inventory_type (name) VALUES ('Bubble Hash');
INSERT INTO inventory_type (name) VALUES ('Hash');
INSERT INTO inventory_type (name) VALUES ('Hydrocarbon Wax');
INSERT INTO inventory_type (name) VALUES ('CO2 Hash Oil');
INSERT INTO inventory_type (name) VALUES ('Food Grade Solvent Extract');
INSERT INTO inventory_type (name) VALUES ('Infused Dairy Butter or Fat in Solid Form');
INSERT INTO inventory_type (name) VALUES ('Infused Cooking Oil');
INSERT INTO inventory_type (name) VALUES ('Solid Marijuana Infused Edible');
INSERT INTO inventory_type (name) VALUES ('Liquid Marijuana Infused Edible');
INSERT INTO inventory_type (name) VALUES ('Marijuana Extract for Inhalation');
INSERT INTO inventory_type (name) VALUES ('Marijuana Infused Topicals');
INSERT INTO inventory_type (name) VALUES ('Sample Jar');
INSERT INTO inventory_type (name) VALUES ('Waste');
INSERT INTO inventory_type (name) VALUES ('Usable Marijuana');
INSERT INTO inventory_type (name) VALUES ('Wet Flower');
INSERT INTO inventory_type (name) VALUES ('Marijuana Mix');
INSERT INTO inventory_type (name) VALUES ('Marijuana Mix Packaged');
INSERT INTO inventory_type (name) VALUES ('Marijuana Mix Infused');
INSERT INTO inventory_type (name) VALUES ('Non-Mandatory QA Sample');
INSERT INTO inventory_type (name) VALUES ('Capsule');
INSERT INTO inventory_type (name) VALUES ('Tincture');
INSERT INTO inventory_type (name) VALUES ('Transdermal Patch');
INSERT INTO inventory_type (name) VALUES ('Suppository');
--||--
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (5, 'Kief', (SELECT id FROM inventory_type WHERE name ='Kief'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (6, 'Flower', (SELECT id FROM inventory_type WHERE name ='Flower'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (7, 'Clone', (SELECT id FROM inventory_type WHERE name ='Clone'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (9, 'Other Plant Material(stems, leaves, etc) to be processed', (SELECT id FROM inventory_type WHERE name ='Other Plant Material(stems, leaves, etc) to be processed'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (10, 'Seed', (SELECT id FROM inventory_type WHERE name ='Seed'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (11, 'Plant Tissue', (SELECT id FROM inventory_type WHERE name ='Plant Tissue'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (12, 'Mature Plant', (SELECT id FROM inventory_type WHERE name ='Mature Plant'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (13, 'Flower Lot', (SELECT id FROM inventory_type WHERE name ='Flower Lot'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (14, 'Other Plant Material Lot', (SELECT id FROM inventory_type WHERE name ='Other Plant Material Lot'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (15, 'Bubble Hash', (SELECT id FROM inventory_type WHERE name ='Bubble Hash'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (16, 'Hash', (SELECT id FROM inventory_type WHERE name ='Hash'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (17, 'Hydrocarbon Wax', (SELECT id FROM inventory_type WHERE name ='Hydrocarbon Wax'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (18, 'CO2 Hash Oil', (SELECT id FROM inventory_type WHERE name ='CO2 Hash Oil'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (19, 'Food Grade Solvent Extract', (SELECT id FROM inventory_type WHERE name ='Food Grade Solvent Extract'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (20, 'Infused Dairy Butter or Fat in Solid Form', (SELECT id FROM inventory_type WHERE name ='Infused Dairy Butter or Fat in Solid Form'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (21, 'Infused Cooking Oil', (SELECT id FROM inventory_type WHERE name ='Infused Cooking Oil'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (22, 'Solid Marijuana Infused Edible', (SELECT id FROM inventory_type WHERE name ='Solid Marijuana Infused Edible'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (23, 'Liquid Marijuana Infused Edible', (SELECT id FROM inventory_type WHERE name ='Liquid Marijuana Infused Edible'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (24, 'Marijuana Extract for Inhalation', (SELECT id FROM inventory_type WHERE name ='Marijuana Extract for Inhalation'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (25, 'Marijuana Infused Topicals', (SELECT id FROM inventory_type WHERE name ='Marijuana Infused Topicals'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (26, 'Sample Jar', (SELECT id FROM inventory_type WHERE name ='Sample Jar'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (27, 'Waste', (SELECT id FROM inventory_type WHERE name ='Waste'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (28, 'Usable Marijuana', (SELECT id FROM inventory_type WHERE name ='Usable Marijuana'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (29, 'Wet Flower', (SELECT id FROM inventory_type WHERE name ='Wet Flower'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (30, 'Marijuana Mix', (SELECT id FROM inventory_type WHERE name ='Marijuana Mix'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (31, 'Marijuana Mix Packaged', (SELECT id FROM inventory_type WHERE name ='Marijuana Mix Packaged'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (32, 'Marijuana Mix Infused', (SELECT id FROM inventory_type WHERE name ='Marijuana Mix Infused'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (33, 'Non-Mandatory QA Sample', (SELECT id FROM inventory_type WHERE name ='Non-Mandatory QA Sample'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (34, 'Capsule', (SELECT id FROM inventory_type WHERE name ='Capsule'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (35, 'Tincture', (SELECT id FROM inventory_type WHERE name ='Tincture'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (36, 'Transdermal Patch', (SELECT id FROM inventory_type WHERE name ='Transdermal Patch'));
INSERT INTO wslcb_inventory_type (id, name, inventory_type_id) VALUES (37, 'Suppository', (SELECT id FROM inventory_type WHERE name ='Suppository'));
--||--
SELECT 'SUCCESSFULLY CREATED fbkt_login SCHEMA' AS message;



