/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api-gateway/src/api-gateway.controller.ts":
/*!********************************************************!*\
  !*** ./apps/api-gateway/src/api-gateway.controller.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGatewayController = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ApiGatewayController = class ApiGatewayController {
    constructor() { }
    async sendOnboardingEmail() {
        try {
            return { "message": "Hello World" };
        }
        catch (error) {
            throw new Error("Error sending hello world");
        }
    }
};
__decorate([
    (0, common_1.Get)("hello-world"),
    (0, swagger_1.ApiOperation)({ summary: 'Hello World Test endpoint' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], ApiGatewayController.prototype, "sendOnboardingEmail", null);
ApiGatewayController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [])
], ApiGatewayController);
exports.ApiGatewayController = ApiGatewayController;


/***/ }),

/***/ "./apps/api-gateway/src/api-gateway.module.ts":
/*!****************************************************!*\
  !*** ./apps/api-gateway/src/api-gateway.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGatewayModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const config_2 = __webpack_require__(/*! ../../common/config */ "./apps/common/config/index.ts");
const auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ "./apps/api-gateway/src/modules/auth/auth.module.ts");
const database_module_1 = __webpack_require__(/*! ../../common/db/database.module */ "./apps/common/db/database.module.ts");
const address_module_1 = __webpack_require__(/*! ./modules/address/address.module */ "./apps/api-gateway/src/modules/address/address.module.ts");
const billing_module_1 = __webpack_require__(/*! ./modules/billing/billing.module */ "./apps/api-gateway/src/modules/billing/billing.module.ts");
const city_module_1 = __webpack_require__(/*! ./modules/address/city/city.module */ "./apps/api-gateway/src/modules/address/city/city.module.ts");
const region_module_1 = __webpack_require__(/*! ./modules/address/region/region.module */ "./apps/api-gateway/src/modules/address/region/region.module.ts");
const ticketing_module_1 = __webpack_require__(/*! ./modules/ticketing/ticketing.module */ "./apps/api-gateway/src/modules/ticketing/ticketing.module.ts");
const resources_module_1 = __webpack_require__(/*! ./modules/resources/resources.module */ "./apps/api-gateway/src/modules/resources/resources.module.ts");
const country_module_1 = __webpack_require__(/*! ./modules/address/country/country.module */ "./apps/api-gateway/src/modules/address/country/country.module.ts");
const billing_routing_module_1 = __webpack_require__(/*! ./modules/billing/billing-routing.module */ "./apps/api-gateway/src/modules/billing/billing-routing.module.ts");
const api_gateway_service_1 = __webpack_require__(/*! ./api-gateway.service */ "./apps/api-gateway/src/api-gateway.service.ts");
const api_gateway_controller_1 = __webpack_require__(/*! ./api-gateway.controller */ "./apps/api-gateway/src/api-gateway.controller.ts");
let ApiGatewayModule = class ApiGatewayModule {
};
ApiGatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            address_module_1.AddressModule,
            region_module_1.RegionModule,
            city_module_1.CityModule,
            country_module_1.CountryModule,
            billing_module_1.BillingModule,
            database_module_1.DatabaseModule,
            resources_module_1.ResourcesModule,
            ticketing_module_1.TicketingModule,
            config_2.ClientConfigModule,
            billing_routing_module_1.BillingRoutingModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ".env",
            }),
        ],
        controllers: [api_gateway_controller_1.ApiGatewayController],
        providers: [api_gateway_service_1.ApiGatewayService],
    })
], ApiGatewayModule);
exports.ApiGatewayModule = ApiGatewayModule;


/***/ }),

/***/ "./apps/api-gateway/src/api-gateway.service.ts":
/*!*****************************************************!*\
  !*** ./apps/api-gateway/src/api-gateway.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGatewayService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ApiGatewayService = class ApiGatewayService {
    constructor() { }
};
ApiGatewayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ApiGatewayService);
exports.ApiGatewayService = ApiGatewayService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/address.constants.ts":
/*!*******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/address.constants.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERROR_MESSAGES = void 0;
exports.ERROR_MESSAGES = {
    CITY_NOT_FOUND: (cityName) => `City with name ${cityName}`,
    CITY_ALREADY_EXISTS: (cityName, regionName) => `City with name ${cityName} already exists in region ${regionName}`,
    CITY_NOT_FOUND_BY_ID: (id) => `City with ID ${id} not found`,
    REGION_NOT_FOUND: (regionName, countryName) => `Region with name ${regionName} does not exist in country ${countryName}`,
    REGION_ALREADY_EXISTS: (regionName, countryName) => `Region with name ${regionName} already exists in country ${countryName}`,
    REGION_NOT_FOUND_BY_ID: (id) => `Region with ID ${id} not found`,
    COUNTRY_NOT_FOUND: (countryName) => `Country with name ${countryName} does not exist`,
    COUNTRY_ALREADY_EXISTS: (countryName) => `Country with name ${countryName} already exists`,
    COUNTRY_REQUIRED_FOR_REGION: `A country is required for the region.`,
    COUNTRY_NOT_FOUND_BY_ID: (id) => `Country with ID ${id} not found`,
    ADDRESS_NOT_FOUND: (addressId) => `Address with ID ${addressId} not found`,
    ADDRESS_ALREADY_EXISTS: (addressId) => `Address with ID ${addressId} already exists`,
    BOTH_REGION_AND_COUNTRY_REQUIRED: 'Both region_name and country_name must be provided together'
};


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/address.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/address.controller.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const address_service_1 = __webpack_require__(/*! ./address.service */ "./apps/api-gateway/src/modules/address/address.service.ts");
const create_address_dto_1 = __webpack_require__(/*! ./dto/create-address.dto */ "./apps/api-gateway/src/modules/address/dto/create-address.dto.ts");
const update_address_dto_1 = __webpack_require__(/*! ./dto/update-address.dto */ "./apps/api-gateway/src/modules/address/dto/update-address.dto.ts");
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    create(dto) {
        return this.addressService.create(dto);
    }
    findAll() {
        return this.addressService.findAll();
    }
    findOne(id) {
        return this.addressService.findOne(id);
    }
    update(id, dto) {
        return this.addressService.update(id, dto);
    }
    remove(id) {
        return this.addressService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_address_dto_1.CreateAddressDto !== "undefined" && create_address_dto_1.CreateAddressDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_address_dto_1.UpdateAddressDto !== "undefined" && update_address_dto_1.UpdateAddressDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "remove", null);
AddressController = __decorate([
    (0, common_1.Controller)('address'),
    __metadata("design:paramtypes", [typeof (_a = typeof address_service_1.AddressService !== "undefined" && address_service_1.AddressService) === "function" ? _a : Object])
], AddressController);
exports.AddressController = AddressController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/address.module.ts":
/*!****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/address.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const city_entity_1 = __webpack_require__(/*! ./city/entities/city.entity */ "./apps/api-gateway/src/modules/address/city/entities/city.entity.ts");
const address_entity_1 = __webpack_require__(/*! ./entities/address.entity */ "./apps/api-gateway/src/modules/address/entities/address.entity.ts");
const region_entity_1 = __webpack_require__(/*! ./region/entities/region.entity */ "./apps/api-gateway/src/modules/address/region/entities/region.entity.ts");
const country_entity_1 = __webpack_require__(/*! ./country/entities/country.entity */ "./apps/api-gateway/src/modules/address/country/entities/country.entity.ts");
const address_service_1 = __webpack_require__(/*! ./address.service */ "./apps/api-gateway/src/modules/address/address.service.ts");
const address_controller_1 = __webpack_require__(/*! ./address.controller */ "./apps/api-gateway/src/modules/address/address.controller.ts");
const city_module_1 = __webpack_require__(/*! ./city/city.module */ "./apps/api-gateway/src/modules/address/city/city.module.ts");
const region_module_1 = __webpack_require__(/*! ./region/region.module */ "./apps/api-gateway/src/modules/address/region/region.module.ts");
let AddressModule = class AddressModule {
};
AddressModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([address_entity_1.Address, city_entity_1.City, region_entity_1.Region, country_entity_1.Country]),
            region_module_1.RegionModule,
            city_module_1.CityModule,
        ],
        controllers: [address_controller_1.AddressController],
        providers: [address_service_1.AddressService]
    })
], AddressModule);
exports.AddressModule = AddressModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/address.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/address.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressService = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const address_entity_1 = __webpack_require__(/*! ./entities/address.entity */ "./apps/api-gateway/src/modules/address/entities/address.entity.ts");
const city_entity_1 = __webpack_require__(/*! ./city/entities/city.entity */ "./apps/api-gateway/src/modules/address/city/entities/city.entity.ts");
const city_service_1 = __webpack_require__(/*! ./city/city.service */ "./apps/api-gateway/src/modules/address/city/city.service.ts");
let AddressService = class AddressService {
    constructor(addressRepo, cityRepo, cityService) {
        this.addressRepo = addressRepo;
        this.cityRepo = cityRepo;
        this.cityService = cityService;
    }
    async create(dto) {
        const { city_name, region_name, country_name, ...addressData } = dto;
        let city = await this.cityService.create({
            city_name: city_name.trim().toLowerCase(),
            region_name: region_name.trim().toLowerCase(),
            country_name: country_name.trim().toLowerCase(),
        });
        const newAddress = this.addressRepo.create({
            ...addressData,
            city,
        });
        return await this.addressRepo.save(newAddress);
    }
    async findAll() {
        return this.addressRepo.find({ relations: ["city"] });
    }
    async findOne(id) {
        const address = await this.addressRepo.findOne({
            where: { address_id: id },
            relations: ["city"],
        });
        if (!address) {
            throw new common_1.NotFoundException(`Address with ID ${id} not found`);
        }
        return address;
    }
    async update(id, dto) {
        const address = await this.addressRepo.findOne({ where: { address_id: id } });
        if (!address) {
            throw new common_1.NotFoundException(`Address with ID ${id} not found`);
        }
        const existingCity = await this.cityRepo.findOne({
            where: { city_name: dto.city_name?.trim().toLowerCase() },
        });
        if (existingCity) {
            const city = await this.cityService.update(existingCity.city_id, {
                city_name: dto.city_name.trim().toLowerCase(),
                region_name: dto.region_name.trim().toLowerCase(),
                country_name: dto.country_name.trim().toLowerCase(),
            });
            address.city = city;
        }
        return this.addressRepo.save(address);
    }
    async remove(id) {
        const result = await this.addressRepo.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Address with ID ${id} not found`);
        }
    }
};
AddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(address_entity_1.Address)),
    __param(1, (0, typeorm_2.InjectRepository)(city_entity_1.City)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object, typeof (_c = typeof city_service_1.CityService !== "undefined" && city_service_1.CityService) === "function" ? _c : Object])
], AddressService);
exports.AddressService = AddressService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/city/city.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/city/city.controller.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CityController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const city_service_1 = __webpack_require__(/*! ./city.service */ "./apps/api-gateway/src/modules/address/city/city.service.ts");
const create_city_dto_1 = __webpack_require__(/*! ./dto/create-city.dto */ "./apps/api-gateway/src/modules/address/city/dto/create-city.dto.ts");
const update_city_dto_1 = __webpack_require__(/*! ./dto/update-city.dto */ "./apps/api-gateway/src/modules/address/city/dto/update-city.dto.ts");
let CityController = class CityController {
    constructor(cityService) {
        this.cityService = cityService;
    }
    create(dto) {
        return this.cityService.create(dto);
    }
    findAll() {
        return this.cityService.findAll();
    }
    findOne(id) {
        return this.cityService.findOne(id);
    }
    update(id, dto) {
        return this.cityService.update(id, dto);
    }
    remove(id) {
        return this.cityService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_city_dto_1.CreateCityDto !== "undefined" && create_city_dto_1.CreateCityDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_city_dto_1.UpdateCityDto !== "undefined" && update_city_dto_1.UpdateCityDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "remove", null);
CityController = __decorate([
    (0, common_1.Controller)('city'),
    __metadata("design:paramtypes", [typeof (_a = typeof city_service_1.CityService !== "undefined" && city_service_1.CityService) === "function" ? _a : Object])
], CityController);
exports.CityController = CityController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/city/city.module.ts":
/*!******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/city/city.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CityModule = void 0;
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! ../../../../..//common/config */ "./apps/common/config/index.ts");
const region_entity_1 = __webpack_require__(/*! ../region/entities/region.entity */ "./apps/api-gateway/src/modules/address/region/entities/region.entity.ts");
const city_controller_1 = __webpack_require__(/*! ./city.controller */ "./apps/api-gateway/src/modules/address/city/city.controller.ts");
const city_service_1 = __webpack_require__(/*! ./city.service */ "./apps/api-gateway/src/modules/address/city/city.service.ts");
const city_entity_1 = __webpack_require__(/*! ./entities/city.entity */ "./apps/api-gateway/src/modules/address/city/entities/city.entity.ts");
const country_entity_1 = __webpack_require__(/*! ../country/entities/country.entity */ "./apps/api-gateway/src/modules/address/country/entities/country.entity.ts");
let CityModule = class CityModule {
};
CityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ClientConfigModule,
            typeorm_1.TypeOrmModule.forFeature([city_entity_1.City, region_entity_1.Region, country_entity_1.Country]),
        ],
        controllers: [city_controller_1.CityController],
        providers: [city_service_1.CityService],
        exports: [city_service_1.CityService],
    })
], CityModule);
exports.CityModule = CityModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/city/city.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/city/city.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CityService = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const city_entity_1 = __webpack_require__(/*! ./entities/city.entity */ "./apps/api-gateway/src/modules/address/city/entities/city.entity.ts");
const region_entity_1 = __webpack_require__(/*! ../region/entities/region.entity */ "./apps/api-gateway/src/modules/address/region/entities/region.entity.ts");
const country_entity_1 = __webpack_require__(/*! ../country/entities/country.entity */ "./apps/api-gateway/src/modules/address/country/entities/country.entity.ts");
const address_constants_1 = __webpack_require__(/*! ../address.constants */ "./apps/api-gateway/src/modules/address/address.constants.ts");
const helpers_1 = __webpack_require__(/*! ../../../../../common/utils/helpers */ "./apps/common/utils/helpers.ts");
let CityService = class CityService {
    constructor(cityRepo, regionRepo, countryRepo) {
        this.cityRepo = cityRepo;
        this.regionRepo = regionRepo;
        this.countryRepo = countryRepo;
    }
    async create(dto) {
        try {
            const { city_name, region_name, country_name } = {
                city_name: dto.city_name?.toLowerCase(),
                region_name: dto.region_name?.toLowerCase(),
                country_name: dto.country_name?.toLowerCase(),
            };
            let country = await this.countryRepo.findOne({ where: { country_name } });
            if (!country) {
                country = this.countryRepo.create({ country_name });
                country = await this.countryRepo.save(country);
            }
            let region = await this.regionRepo.findOne({
                where: { region_name, country },
            });
            if (!region) {
                region = this.regionRepo.create({ region_name, country });
                await this.regionRepo.save(region);
            }
            const existingCity = await this.cityRepo.findOne({
                where: { city_name, region },
            });
            if (existingCity) {
                throw new common_1.HttpException(address_constants_1.ERROR_MESSAGES.CITY_ALREADY_EXISTS(city_name, region_name), common_1.HttpStatus.BAD_REQUEST);
            }
            try {
                const newCity = this.cityRepo.create({ city_name, region });
                return await this.cityRepo.save(newCity);
            }
            catch (error) {
                if ((0, helpers_1.isUniqueConstraintViolation)(error)) {
                    throw new common_1.HttpException(address_constants_1.ERROR_MESSAGES.CITY_ALREADY_EXISTS(city_name, region_name), common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message || error.detail || "An unexpected error occurred", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        return this.cityRepo.find({ relations: ["region"] });
    }
    async findOne(id) {
        const city = await this.cityRepo.findOne({
            where: { city_id: id },
            relations: ["region"],
        });
        if (!city)
            throw new common_1.NotFoundException(address_constants_1.ERROR_MESSAGES.CITY_NOT_FOUND_BY_ID(id));
        return city;
    }
    async findByCity(cityName, regionName, countryName) {
        const { city_name, region_name, country_name } = {
            city_name: cityName?.toLowerCase(),
            region_name: regionName?.toLowerCase(),
            country_name: countryName?.toLowerCase(),
        };
        const country = await this.countryRepo.findOne({
            where: { country_name: country_name },
        });
        if (!country) {
            throw new common_1.NotFoundException(address_constants_1.ERROR_MESSAGES.COUNTRY_NOT_FOUND(country_name));
        }
        const region = await this.regionRepo.findOne({
            where: { region_name: region_name, country },
        });
        if (!region) {
            throw new common_1.NotFoundException(address_constants_1.ERROR_MESSAGES.REGION_NOT_FOUND(region_name, country_name));
        }
        const city = await this.cityRepo.findOne({
            where: { city_name: city_name, region },
            relations: ["region", "region.country"],
        });
        if (!city) {
            throw new common_1.NotFoundException(address_constants_1.ERROR_MESSAGES.CITY_NOT_FOUND(city_name));
        }
        return city;
    }
    async update(id, dto) {
        const { city_name, region_name, country_name } = {
            city_name: dto.city_name?.toLowerCase(),
            region_name: dto.region_name?.toLowerCase(),
            country_name: dto.country_name?.toLowerCase(),
        };
        const city = await this.cityRepo.findOne({ where: { city_id: id } });
        if (!city) {
            throw new common_1.NotFoundException(address_constants_1.ERROR_MESSAGES.CITY_NOT_FOUND_BY_ID(id));
        }
        let region = city.region;
        if (region_name || country_name) {
            if (!region_name || !country_name) {
                throw new Error(address_constants_1.ERROR_MESSAGES.BOTH_REGION_AND_COUNTRY_REQUIRED);
            }
            const country = await this.countryRepo.findOne({
                where: { country_name },
            });
            if (!country) {
                throw new Error(address_constants_1.ERROR_MESSAGES.COUNTRY_NOT_FOUND(country_name));
            }
            region = await this.regionRepo.findOne({
                where: { region_name, country },
            });
            if (!region) {
                throw new Error(address_constants_1.ERROR_MESSAGES.REGION_NOT_FOUND(region_name, country_name));
            }
        }
        if (city_name) {
            city.city_name = city_name;
        }
        if (region) {
            city.region = region;
        }
        try {
            return await this.cityRepo.save(city);
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintViolation)(error)) {
                throw new Error(address_constants_1.ERROR_MESSAGES.CITY_ALREADY_EXISTS(city_name, region_name));
            }
            throw error;
        }
    }
    async remove(id) {
        const city = await this.findOne(id);
        await this.cityRepo.remove(city);
    }
};
CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(city_entity_1.City)),
    __param(1, (0, typeorm_2.InjectRepository)(region_entity_1.Region)),
    __param(2, (0, typeorm_2.InjectRepository)(country_entity_1.Country)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _c : Object])
], CityService);
exports.CityService = CityService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/city/dto/create-city.dto.ts":
/*!**************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/city/dto/create-city.dto.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCityDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateCityDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'city_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCityDto.prototype, "city_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'region_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCityDto.prototype, "region_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'country_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCityDto.prototype, "country_name", void 0);
exports.CreateCityDto = CreateCityDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/city/dto/update-city.dto.ts":
/*!**************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/city/dto/update-city.dto.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCityDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const region_dto_1 = __webpack_require__(/*! @app/api-gateway/src/modules/address/region/dto/region.dto */ "./apps/api-gateway/src/modules/address/region/dto/region.dto.ts");
class UpdateCityDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'city_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCityDto.prototype, "city_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'city_name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCityDto.prototype, "city_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'region', type: [region_dto_1.RegionDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => region_dto_1.RegionDto),
    __metadata("design:type", typeof (_a = typeof region_dto_1.RegionDto !== "undefined" && region_dto_1.RegionDto) === "function" ? _a : Object)
], UpdateCityDto.prototype, "region", void 0);
exports.UpdateCityDto = UpdateCityDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/city/entities/city.entity.ts":
/*!***************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/city/entities/city.entity.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.City = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const region_entity_1 = __webpack_require__(/*! ../../region/entities/region.entity */ "./apps/api-gateway/src/modules/address/region/entities/region.entity.ts");
let City = class City {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], City.prototype, "city_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], City.prototype, "city_name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => region_entity_1.Region, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'region_id' }),
    __metadata("design:type", typeof (_a = typeof region_entity_1.Region !== "undefined" && region_entity_1.Region) === "function" ? _a : Object)
], City.prototype, "region", void 0);
City = __decorate([
    (0, typeorm_1.Entity)('city'),
    (0, typeorm_1.Unique)(['city_name', 'region'])
], City);
exports.City = City;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/country/country.controller.ts":
/*!****************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/country/country.controller.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountryController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const country_service_1 = __webpack_require__(/*! ./country.service */ "./apps/api-gateway/src/modules/address/country/country.service.ts");
const create_country_dto_1 = __webpack_require__(/*! ./dto/create-country.dto */ "./apps/api-gateway/src/modules/address/country/dto/create-country.dto.ts");
const update_country_dto_1 = __webpack_require__(/*! ./dto/update-country.dto */ "./apps/api-gateway/src/modules/address/country/dto/update-country.dto.ts");
let CountryController = class CountryController {
    constructor(countryService) {
        this.countryService = countryService;
    }
    create(dto) {
        return this.countryService.create(dto);
    }
    findAll() {
        return this.countryService.findAll();
    }
    findOne(countryId) {
        return this.countryService.findOne(countryId);
    }
    update(countryId, dto) {
        return this.countryService.update(countryId, dto);
    }
    delete(countryId) {
        return this.countryService.delete(countryId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_country_dto_1.CreateCountryDto !== "undefined" && create_country_dto_1.CreateCountryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':countryId'),
    __param(0, (0, common_1.Param)('countryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':countryId'),
    __param(0, (0, common_1.Param)('countryId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_country_dto_1.UpdateCountryDto !== "undefined" && update_country_dto_1.UpdateCountryDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':countryId'),
    __param(0, (0, common_1.Param)('countryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountryController.prototype, "delete", null);
CountryController = __decorate([
    (0, common_1.Controller)('country'),
    __metadata("design:paramtypes", [typeof (_a = typeof country_service_1.CountryService !== "undefined" && country_service_1.CountryService) === "function" ? _a : Object])
], CountryController);
exports.CountryController = CountryController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/country/country.module.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/country/country.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountryModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const config_1 = __webpack_require__(/*! @app/common/config */ "./apps/common/config/index.ts");
const country_service_1 = __webpack_require__(/*! ./country.service */ "./apps/api-gateway/src/modules/address/country/country.service.ts");
const country_controller_1 = __webpack_require__(/*! ./country.controller */ "./apps/api-gateway/src/modules/address/country/country.controller.ts");
const country_entity_1 = __webpack_require__(/*! ../country/entities/country.entity */ "./apps/api-gateway/src/modules/address/country/entities/country.entity.ts");
let CountryModule = class CountryModule {
};
CountryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ClientConfigModule,
            typeorm_1.TypeOrmModule.forFeature([country_entity_1.Country]),
        ],
        controllers: [country_controller_1.CountryController],
        providers: [country_service_1.CountryService],
        exports: [country_service_1.CountryService],
    })
], CountryModule);
exports.CountryModule = CountryModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/country/country.service.ts":
/*!*************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/country/country.service.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountryService = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const address_constants_1 = __webpack_require__(/*! ../address.constants */ "./apps/api-gateway/src/modules/address/address.constants.ts");
const country_entity_1 = __webpack_require__(/*! ../country/entities/country.entity */ "./apps/api-gateway/src/modules/address/country/entities/country.entity.ts");
const helpers_1 = __webpack_require__(/*! @app/common/utils/helpers */ "./apps/common/utils/helpers.ts");
let CountryService = class CountryService {
    constructor(countryRepo) {
        this.countryRepo = countryRepo;
    }
    async create(dto) {
        const country = await this.countryRepo.findOne({
            where: { country_name: dto.country_name.trim().toLowerCase() },
        });
        try {
            const newCountry = this.countryRepo.create(dto);
            return await this.countryRepo.save(newCountry);
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintViolation)(error)) {
                throw new common_1.HttpException(address_constants_1.ERROR_MESSAGES.COUNTRY_ALREADY_EXISTS(country.country_name), common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException(error.message || 'An unexpected error occurred', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        return this.countryRepo.find();
    }
    async findOne(id) {
        const country = await this.countryRepo.findOne({
            where: { country_id: id },
        });
        if (!country)
            throw new common_1.NotFoundException(address_constants_1.ERROR_MESSAGES.COUNTRY_NOT_FOUND_BY_ID(id));
        return country;
    }
    async update(id, dto) {
        const country = await this.countryRepo.findOne({
            where: { country_id: id },
        });
        if (!country)
            throw new common_1.NotFoundException(address_constants_1.ERROR_MESSAGES.COUNTRY_NOT_FOUND_BY_ID(id));
        Object.assign(country, {
            ...dto,
            country_name: dto.country_name?.trim().toLowerCase(),
        });
        return this.countryRepo.save(country);
    }
    async delete(id) {
        const country = await this.countryRepo.delete(id);
        if (country.affected === 0)
            throw new common_1.NotFoundException(address_constants_1.ERROR_MESSAGES.COUNTRY_NOT_FOUND_BY_ID(id));
    }
};
CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(country_entity_1.Country)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], CountryService);
exports.CountryService = CountryService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/country/dto/country.dto.ts":
/*!*************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/country/dto/country.dto.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountryDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CountryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'country_id' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CountryDto.prototype, "country_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'country_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CountryDto.prototype, "country_name", void 0);
exports.CountryDto = CountryDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/country/dto/create-country.dto.ts":
/*!********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/country/dto/create-country.dto.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCountryDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateCountryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'country_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "country_name", void 0);
exports.CreateCountryDto = CreateCountryDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/country/dto/update-country.dto.ts":
/*!********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/country/dto/update-country.dto.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCountryDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateCountryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'country_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCountryDto.prototype, "country_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'country_name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCountryDto.prototype, "country_name", void 0);
exports.UpdateCountryDto = UpdateCountryDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/country/entities/country.entity.ts":
/*!*********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/country/entities/country.entity.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Country = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const region_entity_1 = __webpack_require__(/*! ../../region/entities/region.entity */ "./apps/api-gateway/src/modules/address/region/entities/region.entity.ts");
let Country = class Country {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Country.prototype, "country_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Country.prototype, "country_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => region_entity_1.Region, (region) => region.country),
    __metadata("design:type", Array)
], Country.prototype, "regions", void 0);
Country = __decorate([
    (0, typeorm_1.Entity)('country')
], Country);
exports.Country = Country;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/dto/create-address.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/dto/create-address.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAddressDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const address_type_enum_1 = __webpack_require__(/*! @lib/contracts/address/enums/address-type.enum */ "./libs/contracts/src/address/enums/address-type.enum.ts");
class CreateAddressDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'address_type', enum: address_type_enum_1.AddressType }),
    (0, class_validator_1.IsEnum)(address_type_enum_1.AddressType),
    __metadata("design:type", typeof (_a = typeof address_type_enum_1.AddressType !== "undefined" && address_type_enum_1.AddressType) === "function" ? _a : Object)
], CreateAddressDto.prototype, "address_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'primary' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", typeof (_b = typeof Boolean !== "undefined" && Boolean) === "function" ? _b : Object)
], CreateAddressDto.prototype, "primary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'address_1' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "address_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'address_2' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "address_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'address_postal_code' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "address_postal_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'city_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "city_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'region_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "region_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'country_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "country_name", void 0);
exports.CreateAddressDto = CreateAddressDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/dto/update-address.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/dto/update-address.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAddressDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const address_type_enum_1 = __webpack_require__(/*! @lib/contracts/address/enums/address-type.enum */ "./libs/contracts/src/address/enums/address-type.enum.ts");
class UpdateAddressDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'address_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "address_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'address_type', enum: address_type_enum_1.AddressType }),
    (0, class_validator_1.IsEnum)(address_type_enum_1.AddressType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof address_type_enum_1.AddressType !== "undefined" && address_type_enum_1.AddressType) === "function" ? _a : Object)
], UpdateAddressDto.prototype, "address_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'primary' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Boolean !== "undefined" && Boolean) === "function" ? _b : Object)
], UpdateAddressDto.prototype, "primary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'address_1' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "address_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'address_2' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "address_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'address_postal_code' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "address_postal_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'city_name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "city_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'region_name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "region_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'country_name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "country_name", void 0);
exports.UpdateAddressDto = UpdateAddressDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/entities/address.entity.ts":
/*!*************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/entities/address.entity.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Address = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const city_entity_1 = __webpack_require__(/*! ../city/entities/city.entity */ "./apps/api-gateway/src/modules/address/city/entities/city.entity.ts");
const region_entity_1 = __webpack_require__(/*! ../region/entities/region.entity */ "./apps/api-gateway/src/modules/address/region/entities/region.entity.ts");
const country_entity_1 = __webpack_require__(/*! ../country/entities/country.entity */ "./apps/api-gateway/src/modules/address/country/entities/country.entity.ts");
const address_type_enum_1 = __webpack_require__(/*! @lib/contracts/address/enums/address-type.enum */ "./libs/contracts/src/address/enums/address-type.enum.ts");
let Address = class Address {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Address.prototype, "address_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: address_type_enum_1.AddressType }),
    __metadata("design:type", typeof (_a = typeof address_type_enum_1.AddressType !== "undefined" && address_type_enum_1.AddressType) === "function" ? _a : Object)
], Address.prototype, "address_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", typeof (_b = typeof Boolean !== "undefined" && Boolean) === "function" ? _b : Object)
], Address.prototype, "primary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128 }),
    __metadata("design:type", String)
], Address.prototype, "address_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128, nullable: true }),
    __metadata("design:type", String)
], Address.prototype, "address_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Address.prototype, "address_postal_code", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'city_id' }),
    __metadata("design:type", typeof (_c = typeof city_entity_1.City !== "undefined" && city_entity_1.City) === "function" ? _c : Object)
], Address.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => region_entity_1.Region, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'region_id' }),
    __metadata("design:type", typeof (_d = typeof region_entity_1.Region !== "undefined" && region_entity_1.Region) === "function" ? _d : Object)
], Address.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.Country, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'country_id' }),
    __metadata("design:type", typeof (_e = typeof country_entity_1.Country !== "undefined" && country_entity_1.Country) === "function" ? _e : Object)
], Address.prototype, "country", void 0);
Address = __decorate([
    (0, typeorm_1.Entity)('address')
], Address);
exports.Address = Address;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/region/dto/create-region.dto.ts":
/*!******************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/region/dto/create-region.dto.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRegionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateRegionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'region_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegionDto.prototype, "region_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'country_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegionDto.prototype, "country_name", void 0);
exports.CreateRegionDto = CreateRegionDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/region/dto/region.dto.ts":
/*!***********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/region/dto/region.dto.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegionDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const country_dto_1 = __webpack_require__(/*! @app/api-gateway/src/modules/address/country/dto/country.dto */ "./apps/api-gateway/src/modules/address/country/dto/country.dto.ts");
class RegionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'region_id' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegionDto.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'region_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegionDto.prototype, "region_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'country_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegionDto.prototype, "country_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'country', type: [country_dto_1.CountryDto] }),
    (0, class_transformer_1.Type)(() => country_dto_1.CountryDto),
    __metadata("design:type", typeof (_a = typeof country_dto_1.CountryDto !== "undefined" && country_dto_1.CountryDto) === "function" ? _a : Object)
], RegionDto.prototype, "country", void 0);
exports.RegionDto = RegionDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/region/dto/update-region.dto.ts":
/*!******************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/region/dto/update-region.dto.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRegionDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const country_dto_1 = __webpack_require__(/*! @app/api-gateway/src/modules/address/country/dto/country.dto */ "./apps/api-gateway/src/modules/address/country/dto/country.dto.ts");
class UpdateRegionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'region_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRegionDto.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'region_name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRegionDto.prototype, "region_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'country_name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRegionDto.prototype, "country_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'country', type: [country_dto_1.CountryDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => country_dto_1.CountryDto),
    __metadata("design:type", typeof (_a = typeof country_dto_1.CountryDto !== "undefined" && country_dto_1.CountryDto) === "function" ? _a : Object)
], UpdateRegionDto.prototype, "country", void 0);
exports.UpdateRegionDto = UpdateRegionDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/region/entities/region.entity.ts":
/*!*******************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/region/entities/region.entity.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Region = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const country_entity_1 = __webpack_require__(/*! ../../country/entities/country.entity */ "./apps/api-gateway/src/modules/address/country/entities/country.entity.ts");
let Region = class Region {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Region.prototype, "region_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Region.prototype, "region_name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.Country, (country) => country.regions, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'country_id' }),
    __metadata("design:type", typeof (_a = typeof country_entity_1.Country !== "undefined" && country_entity_1.Country) === "function" ? _a : Object)
], Region.prototype, "country", void 0);
Region = __decorate([
    (0, typeorm_1.Entity)('region'),
    (0, typeorm_1.Unique)(['region_name', 'country'])
], Region);
exports.Region = Region;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/region/region.controller.ts":
/*!**************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/region/region.controller.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const region_service_1 = __webpack_require__(/*! ./region.service */ "./apps/api-gateway/src/modules/address/region/region.service.ts");
const create_region_dto_1 = __webpack_require__(/*! ./dto/create-region.dto */ "./apps/api-gateway/src/modules/address/region/dto/create-region.dto.ts");
const update_region_dto_1 = __webpack_require__(/*! ./dto/update-region.dto */ "./apps/api-gateway/src/modules/address/region/dto/update-region.dto.ts");
let RegionController = class RegionController {
    constructor(regionService) {
        this.regionService = regionService;
    }
    createRegion(dto) {
        return this.regionService.createRegion(dto);
    }
    getAllRegions() {
        return this.regionService.findAll();
    }
    findOneRegion(regionId) {
        return this.regionService.findOne(regionId);
    }
    updateRegion(regionId, dto) {
        return this.regionService.update(regionId, dto);
    }
    deleteRegion(regionId) {
        return this.regionService.delete(regionId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_region_dto_1.CreateRegionDto !== "undefined" && create_region_dto_1.CreateRegionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], RegionController.prototype, "createRegion", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegionController.prototype, "getAllRegions", null);
__decorate([
    (0, common_1.Get)(':regionId'),
    __param(0, (0, common_1.Param)('regionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegionController.prototype, "findOneRegion", null);
__decorate([
    (0, common_1.Patch)(':regionId'),
    __param(0, (0, common_1.Param)('regionId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_region_dto_1.UpdateRegionDto !== "undefined" && update_region_dto_1.UpdateRegionDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], RegionController.prototype, "updateRegion", null);
__decorate([
    (0, common_1.Delete)(':regionId'),
    __param(0, (0, common_1.Param)('regionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegionController.prototype, "deleteRegion", null);
RegionController = __decorate([
    (0, common_1.Controller)('region'),
    __metadata("design:paramtypes", [typeof (_a = typeof region_service_1.RegionService !== "undefined" && region_service_1.RegionService) === "function" ? _a : Object])
], RegionController);
exports.RegionController = RegionController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/region/region.module.ts":
/*!**********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/region/region.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegionModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const region_service_1 = __webpack_require__(/*! ./region.service */ "./apps/api-gateway/src/modules/address/region/region.service.ts");
const region_controller_1 = __webpack_require__(/*! ./region.controller */ "./apps/api-gateway/src/modules/address/region/region.controller.ts");
const config_1 = __webpack_require__(/*! @app/common/config */ "./apps/common/config/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const region_entity_1 = __webpack_require__(/*! ./entities/region.entity */ "./apps/api-gateway/src/modules/address/region/entities/region.entity.ts");
const country_entity_1 = __webpack_require__(/*! ../country/entities/country.entity */ "./apps/api-gateway/src/modules/address/country/entities/country.entity.ts");
let RegionModule = class RegionModule {
};
RegionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ClientConfigModule,
            typeorm_1.TypeOrmModule.forFeature([region_entity_1.Region, country_entity_1.Country]),
        ],
        controllers: [region_controller_1.RegionController],
        providers: [region_service_1.RegionService],
        exports: [region_service_1.RegionService],
    })
], RegionModule);
exports.RegionModule = RegionModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/address/region/region.service.ts":
/*!***********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/address/region/region.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegionService = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const region_entity_1 = __webpack_require__(/*! ./entities/region.entity */ "./apps/api-gateway/src/modules/address/region/entities/region.entity.ts");
const country_entity_1 = __webpack_require__(/*! ../country/entities/country.entity */ "./apps/api-gateway/src/modules/address/country/entities/country.entity.ts");
const address_constants_1 = __webpack_require__(/*! ../address.constants */ "./apps/api-gateway/src/modules/address/address.constants.ts");
const helpers_1 = __webpack_require__(/*! @app/common/utils/helpers */ "./apps/common/utils/helpers.ts");
let RegionService = class RegionService {
    constructor(regionRepo, countryRepo) {
        this.regionRepo = regionRepo;
        this.countryRepo = countryRepo;
    }
    async createRegion(dto) {
        const { region_name, country_name } = {
            region_name: dto.region_name?.toLowerCase(),
            country_name: dto.country_name?.toLowerCase(),
        };
        let country = await this.countryRepo.findOne({ where: { country_name } });
        if (!country) {
            country = this.countryRepo.create({ country_name });
            country = await this.countryRepo.save(country);
        }
        const existingRegion = await this.regionRepo.findOne({
            where: { region_name, country },
        });
        if (existingRegion) {
            throw new common_1.HttpException(address_constants_1.ERROR_MESSAGES.REGION_ALREADY_EXISTS(region_name, country_name), common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const newRegion = this.regionRepo.create({ region_name, country });
            return await this.regionRepo.save(newRegion);
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintViolation)(error)) {
                throw new common_1.HttpException(address_constants_1.ERROR_MESSAGES.REGION_ALREADY_EXISTS(region_name, country_name), common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException(error.message || 'An unexpected error occurred', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        return this.regionRepo.find();
    }
    async findOne(id) {
        const region = await this.regionRepo.findOne({
            where: { region_id: id },
            relations: ["country"],
        });
        if (!region)
            throw new common_1.NotFoundException(address_constants_1.ERROR_MESSAGES.REGION_NOT_FOUND_BY_ID(id));
        return region;
    }
    async update(id, dto) {
        const { region_name, country_name } = {
            region_name: dto.region_name?.toLowerCase(),
            country_name: dto.country_name?.toLowerCase(),
        };
        const region = await this.regionRepo.findOne({ where: { region_id: id } });
        if (!region) {
            throw new common_1.NotFoundException(address_constants_1.ERROR_MESSAGES.REGION_NOT_FOUND_BY_ID(id));
        }
        let country = region.country;
        if (country_name) {
            country = await this.countryRepo.findOne({ where: { country_name } });
            if (!country) {
                country = this.countryRepo.create({ country_name });
                country = await this.countryRepo.save(country);
            }
            else if (!country) {
                throw new common_1.HttpException(address_constants_1.ERROR_MESSAGES.COUNTRY_REQUIRED_FOR_REGION, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        if (region_name) {
            region.region_name = region_name;
        }
        if (country) {
            region.country = country;
        }
        try {
            return await this.regionRepo.save(region);
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintViolation)(error)) {
                throw new common_1.HttpException(address_constants_1.ERROR_MESSAGES.REGION_ALREADY_EXISTS(region_name, country_name), common_1.HttpStatus.BAD_REQUEST);
            }
            throw error;
        }
    }
    async delete(id) {
        const region = await this.regionRepo.delete(id);
        if (region.affected === 0)
            throw new common_1.NotFoundException(address_constants_1.ERROR_MESSAGES.REGION_NOT_FOUND_BY_ID(id));
    }
};
RegionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(region_entity_1.Region)),
    __param(1, (0, typeorm_2.InjectRepository)(country_entity_1.Country)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object])
], RegionService);
exports.RegionService = RegionService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/auth.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/auth.controller.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const express_1 = __webpack_require__(/*! express */ "express");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/api-gateway/src/modules/auth/auth.service.ts");
const public_decorator_1 = __webpack_require__(/*! apps/common/decorators/public.decorator */ "./apps/common/decorators/public.decorator.ts");
const sign_in_dto_1 = __webpack_require__(/*! ./core/dto/sign-in.dto */ "./apps/api-gateway/src/modules/auth/core/dto/sign-in.dto.ts");
const mail_action_dto_1 = __webpack_require__(/*! ./core/dto/mail-action.dto */ "./apps/api-gateway/src/modules/auth/core/dto/mail-action.dto.ts");
const verify_email_dto_1 = __webpack_require__(/*! ./core/dto/verify-email.dto */ "./apps/api-gateway/src/modules/auth/core/dto/verify-email.dto.ts");
const reset_password_dto_1 = __webpack_require__(/*! ./core/dto/reset-password.dto */ "./apps/api-gateway/src/modules/auth/core/dto/reset-password.dto.ts");
const change_password_dto_1 = __webpack_require__(/*! ./core/dto/change-password.dto */ "./apps/api-gateway/src/modules/auth/core/dto/change-password.dto.ts");
const passport_jwt_guard_1 = __webpack_require__(/*! ./core/guards/passport-jwt.guard */ "./apps/api-gateway/src/modules/auth/core/guards/passport-jwt.guard.ts");
const passport_local_guard_1 = __webpack_require__(/*! ./core/guards/passport-local.guard */ "./apps/api-gateway/src/modules/auth/core/guards/passport-local.guard.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async userLogin(authSignInDto) {
        return await this.authService.authenticate(authSignInDto);
    }
    async resetPassword(resetPasswordDto) {
        return await this.authService.resetPassword(resetPasswordDto);
    }
    changePassword(changePasswordDto) {
        return this.authService.changePassword(changePasswordDto);
    }
    async verifyEmail(query, res) {
        const verificationResult = await this.authService.verifyEmail(query.token);
        const frontendUrl = await this.authService.getFrontEndBaseUrl();
        if (verificationResult) {
            return res.redirect(`${frontendUrl}`);
        }
        else {
            return res.redirect(`${frontendUrl}/404`);
        }
    }
    async mailUnsubscribe(query) {
        return await this.authService.unsubscribeEmail(query);
    }
    async mailSubscribe(query) {
        return await this.authService.subscribeEmail(query);
    }
    login(request) {
        return this.authService.signIn(request.user);
    }
    getUserInfo(request) {
        return { data: request.user };
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'User Login' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Logged in user successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Failed to log in user.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof sign_in_dto_1.AuthSignInDto !== "undefined" && sign_in_dto_1.AuthSignInDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userLogin", null);
__decorate([
    (0, common_1.Post)('/reset-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Reset Password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password reset successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Failed to reset password.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof reset_password_dto_1.ResetPasswordDto !== "undefined" && reset_password_dto_1.ResetPasswordDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('/change-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Change Password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password changed successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Failed to change password.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof change_password_dto_1.ChangePasswordDto !== "undefined" && change_password_dto_1.ChangePasswordDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Get)('/verify-email'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify Email' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Email verified successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Failed to verify email.' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof verify_email_dto_1.VerifyEmailDto !== "undefined" && verify_email_dto_1.VerifyEmailDto) === "function" ? _e : Object, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Get)('/mail-unsubscribe'),
    (0, swagger_1.ApiOperation)({ summary: 'Mail Unsubscribe' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully unsubscribed from emails.', type: mail_action_dto_1.MailActionDto }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation Error' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof mail_action_dto_1.MailActionDto !== "undefined" && mail_action_dto_1.MailActionDto) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "mailUnsubscribe", null);
__decorate([
    (0, common_1.Get)('/mail-subscribe'),
    (0, swagger_1.ApiOperation)({ summary: 'Mail Subscribe' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully subscribed to emails.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Failed to subscribe to emails.' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof mail_action_dto_1.MailActionDto !== "undefined" && mail_action_dto_1.MailActionDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "mailSubscribe", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('local-guard-test-endpoint'),
    (0, common_1.UseGuards)(passport_local_guard_1.PassportLocalGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('jwt-auth-test-endpoint'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(passport_jwt_guard_1.PassportJwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getUserInfo", null);
AuthController = __decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/auth.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/auth.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_strategy_1 = __webpack_require__(/*! ./core/strategies/jwt.strategy */ "./apps/api-gateway/src/modules/auth/core/strategies/jwt.strategy.ts");
const local_strategy_1 = __webpack_require__(/*! ./core/strategies/local.strategy */ "./apps/api-gateway/src/modules/auth/core/strategies/local.strategy.ts");
const config_2 = __webpack_require__(/*! @app/common/config */ "./apps/common/config/index.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/api-gateway/src/modules/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/api-gateway/src/modules/auth/auth.service.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./apps/api-gateway/src/modules/auth/users/users.module.ts");
const roles_module_1 = __webpack_require__(/*! ./roles/roles.module */ "./apps/api-gateway/src/modules/auth/roles/roles.module.ts");
const groups_module_1 = __webpack_require__(/*! ./groups/groups.module */ "./apps/api-gateway/src/modules/auth/groups/groups.module.ts");
const mail_module_1 = __webpack_require__(/*! ../messaging/mail/mail.module */ "./apps/api-gateway/src/modules/messaging/mail/mail.module.ts");
const contacts_module_1 = __webpack_require__(/*! ./contacts/contacts.module */ "./apps/api-gateway/src/modules/auth/contacts/contacts.module.ts");
const permissions_module_1 = __webpack_require__(/*! ./permissions/permissions.module */ "./apps/api-gateway/src/modules/auth/permissions/permissions.module.ts");
const user_credentials_entity_1 = __webpack_require__(/*! ./users/entities/user-credentials.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user-credentials.entity.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            mail_module_1.MailModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            groups_module_1.GroupsModule,
            contacts_module_1.ContactsModule,
            passport_1.PassportModule,
            permissions_module_1.PermissionsModule,
            config_2.ClientConfigModule,
            typeorm_1.TypeOrmModule.forFeature([user_credentials_entity_1.UserCredentials]),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '1h' },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            auth_service_1.AuthService
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/auth.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/auth.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mail_service_1 = __webpack_require__(/*! ../messaging/mail/mail.service */ "./apps/api-gateway/src/modules/messaging/mail/mail.service.ts");
const user_entity_1 = __webpack_require__(/*! ./users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
const user_credentials_entity_1 = __webpack_require__(/*! ./users/entities/user-credentials.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user-credentials.entity.ts");
const contracts_1 = __webpack_require__(/*! @lib/contracts */ "./libs/contracts/src/index.ts");
let AuthService = class AuthService {
    constructor(jwtService, mailService, configService, userRepository, userCredentialsRepository) {
        this.jwtService = jwtService;
        this.mailService = mailService;
        this.configService = configService;
        this.userRepository = userRepository;
        this.userCredentialsRepository = userCredentialsRepository;
    }
    async getFrontEndBaseUrl() {
        return this.configService.get("FE_BASE_URL");
    }
    async signIn(user) {
        const tokenPayload = {
            sub: user.userId,
            username: user.email,
        };
        const accessToken = await this.jwtService.signAsync(tokenPayload);
        return {
            accessToken,
            email: user.email,
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName,
        };
    }
    async findUserByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email: email },
            relations: ["credentials"],
        });
        if (!user) {
            return null;
        }
        return (0, class_transformer_1.plainToInstance)(contracts_1.UserDto, user, { excludeExtraneousValues: false });
    }
    async verifyEmail(token) {
        const userCreds = await this.userCredentialsRepository.findOne({
            where: { verification_token: token },
        });
        if (!userCreds) {
            throw new common_1.NotFoundException(`Invalid verification token`);
        }
        userCreds.is_verified = true;
        userCreds.verification_token = "";
        await this.userCredentialsRepository.save(userCreds);
        await this.mailService.sendWelcomeMail({
            first_name: userCreds.user.first_name,
            last_name: userCreds.user.last_name,
            email: userCreds.user.email,
            user_id: userCreds.user.user_id,
        });
        return true;
    }
    async unsubscribeEmail(input) {
        const user = await this.findUserByEmail(input.email);
        if (!user) {
            throw new common_1.NotFoundException(`User with email ${input.email} not found`);
        }
        user.credentials.is_subscribed = false;
        await this.userRepository.save(user);
    }
    async subscribeEmail(input) {
        const user = await this.findUserByEmail(input.email);
        if (!user) {
            throw new common_1.NotFoundException(`User with email ${input.email} not found`);
        }
        if (user.credentials.is_subscribed_token == input.token) {
            user.credentials.is_subscribed = true;
            await this.userRepository.save(user);
            return { message: "Successfully subscribed to emails" };
        }
        throw new common_1.BadRequestException("Error subscribing email!");
    }
    async authenticate(input) {
        const user = await this.validateUser(input);
        if (!user) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        return this.signIn(user);
    }
    async validateUser(input) {
        const user = await this.findUserByEmail(input.email);
        if (user &&
            input.password === user.credentials.password &&
            user.credentials.is_verified) {
            return {
                userId: user.user_id,
                email: user.email,
                firstName: user.first_name,
                lastName: user.last_name,
            };
        }
        return null;
    }
    async resetPassword(input) {
        const user = await this.findUserByEmail(input.email);
        if (!user) {
            throw new common_1.NotFoundException(`User with email ${input.email} not found`);
        }
        user.credentials.reset_token = (0, uuid_1.v4)();
        await this.userRepository.save(user);
        const feBaseUrl = this.configService.get("FE_BASE_URL");
        const resetLink = `${feBaseUrl}/account/change-password?email=${user.email}&token=${user.credentials.reset_token}`;
        if (user) {
            await this.mailService.sendPasswordResetMail({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                reset_link: resetLink,
            });
        }
    }
    async changePassword(input) {
        const user = await this.findUserByEmail(input.email);
        if (!user) {
            throw new common_1.UnauthorizedException("User not found");
        }
        const isValidToken = input.token === user.credentials.reset_token;
        if (!isValidToken) {
            throw new common_1.UnauthorizedException("Invalid reset token");
        }
        user.credentials.password = bcrypt.hashSync(input.newPassword, 10);
        user.credentials.reset_token = "";
        await this.userRepository.save(user);
        return { message: "Password changed successfully" };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(4, (0, typeorm_2.InjectRepository)(user_credentials_entity_1.UserCredentials)),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof mail_service_1.MailService !== "undefined" && mail_service_1.MailService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object, typeof (_d = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _e : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/contacts/contact.constants.ts":
/*!*************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/contacts/contact.constants.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONTACT_NOT_FOUND = void 0;
exports.CONTACT_NOT_FOUND = "Contact not found";


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/contacts/contacts.controller.ts":
/*!***************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/contacts/contacts.controller.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const contacts_service_1 = __webpack_require__(/*! ./contacts.service */ "./apps/api-gateway/src/modules/auth/contacts/contacts.service.ts");
const create_contact_dto_1 = __webpack_require__(/*! @lib/contracts/auth/contacts/create-contact.dto */ "./libs/contracts/src/auth/contacts/create-contact.dto.ts");
const update_contact_dto_1 = __webpack_require__(/*! @lib/contracts/auth/contacts/update-contact.dto */ "./libs/contracts/src/auth/contacts/update-contact.dto.ts");
let ContactsController = class ContactsController {
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    create(dto) {
        return this.contactsService.create(dto);
    }
    findAll() {
        return this.contactsService.findAll();
    }
    findOne(id) {
        return this.contactsService.findOne(id);
    }
    update(id, dto) {
        return this.contactsService.update(id, dto);
    }
    remove(id) {
        return this.contactsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_contact_dto_1.CreateContactDto !== "undefined" && create_contact_dto_1.CreateContactDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_contact_dto_1.UpdateContactDto !== "undefined" && update_contact_dto_1.UpdateContactDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "remove", null);
ContactsController = __decorate([
    (0, common_1.Controller)('contacts'),
    __metadata("design:paramtypes", [typeof (_a = typeof contacts_service_1.ContactsService !== "undefined" && contacts_service_1.ContactsService) === "function" ? _a : Object])
], ContactsController);
exports.ContactsController = ContactsController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/contacts/contacts.module.ts":
/*!***********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/contacts/contacts.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ContactsModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactsModule = void 0;
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! ../../../../..//common/config */ "./apps/common/config/index.ts");
const helpers_1 = __webpack_require__(/*! ../../../../../common/utils/helpers */ "./apps/common/utils/helpers.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/api-gateway/src/modules/auth/users/users.module.ts");
const contact_entity_1 = __webpack_require__(/*! ./entities/contact.entity */ "./apps/api-gateway/src/modules/auth/contacts/entities/contact.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
const contacts_service_1 = __webpack_require__(/*! ./contacts.service */ "./apps/api-gateway/src/modules/auth/contacts/contacts.service.ts");
const contacts_controller_1 = __webpack_require__(/*! ./contacts.controller */ "./apps/api-gateway/src/modules/auth/contacts/contacts.controller.ts");
let ContactsModule = ContactsModule_1 = class ContactsModule {
};
ContactsModule = ContactsModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ClientConfigModule,
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            typeorm_1.TypeOrmModule.forFeature([contact_entity_1.Contact, user_entity_1.User]),
            core_1.RouterModule.register([
                {
                    path: '',
                    children: [
                        ...(0, helpers_1.appendSubPathsToBaseModule)('', [ContactsModule_1]),
                    ],
                },
            ]),
        ],
        controllers: [contacts_controller_1.ContactsController],
        providers: [contacts_service_1.ContactsService],
        exports: [contacts_service_1.ContactsService],
    })
], ContactsModule);
exports.ContactsModule = ContactsModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/contacts/contacts.service.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/contacts/contacts.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactsService = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const contact_constants_1 = __webpack_require__(/*! ./contact.constants */ "./apps/api-gateway/src/modules/auth/contacts/contact.constants.ts");
const contact_entity_1 = __webpack_require__(/*! ./entities/contact.entity */ "./apps/api-gateway/src/modules/auth/contacts/entities/contact.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
let ContactsService = class ContactsService {
    constructor(contactRepo, userRepo) {
        this.contactRepo = contactRepo;
        this.userRepo = userRepo;
    }
    async create(dto) {
        const user = await this.userRepo.findOneBy({ user_id: dto.user.user_id });
        if (!user)
            throw new common_1.NotFoundException("User not found");
        const contact = this.contactRepo.create({
            ...dto,
            user,
        });
        return this.contactRepo.save(contact);
    }
    async findAll() {
        return this.contactRepo.find({ relations: ['user'] });
    }
    async findOne(id) {
        const contact = await this.contactRepo.findOne({
            where: { id },
            relations: ['user'],
        });
        if (!contact)
            throw new common_1.NotFoundException(contact_constants_1.CONTACT_NOT_FOUND);
        return contact;
    }
    async update(id, dto) {
        const contact = await this.findOne(id);
        Object.assign(contact, dto);
        return this.contactRepo.save(contact);
    }
    async remove(id) {
        const contact = await this.findOne(id);
        await this.contactRepo.remove(contact);
    }
};
ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(contact_entity_1.Contact)),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object])
], ContactsService);
exports.ContactsService = ContactsService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/contacts/dto/contact.dto.ts":
/*!***********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/contacts/dto/contact.dto.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/users/dto/user.dto */ "./apps/api-gateway/src/modules/auth/users/dto/user.dto.ts");
class ContactDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", typeof (_a = typeof String !== "undefined" && String) === "function" ? _a : Object)
], ContactDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user', type: user_dto_1.UserDto }),
    (0, class_transformer_1.Type)(() => user_dto_1.UserDto),
    __metadata("design:type", typeof (_b = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _b : Object)
], ContactDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'first_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", typeof (_c = typeof String !== "undefined" && String) === "function" ? _c : Object)
], ContactDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'last_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", typeof (_d = typeof String !== "undefined" && String) === "function" ? _d : Object)
], ContactDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'email' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", typeof (_e = typeof String !== "undefined" && String) === "function" ? _e : Object)
], ContactDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'relation' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", typeof (_f = typeof String !== "undefined" && String) === "function" ? _f : Object)
], ContactDto.prototype, "relation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", typeof (_g = typeof String !== "undefined" && String) === "function" ? _g : Object)
], ContactDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'is_emergency_contact' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ContactDto.prototype, "is_emergency_contact", void 0);
exports.ContactDto = ContactDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/contacts/entities/contact.entity.ts":
/*!*******************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/contacts/entities/contact.entity.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Contact = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
let Contact = class Contact {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", typeof (_a = typeof String !== "undefined" && String) === "function" ? _a : Object)
], Contact.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.contacts, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object)
], Contact.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128 }),
    __metadata("design:type", typeof (_c = typeof String !== "undefined" && String) === "function" ? _c : Object)
], Contact.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128 }),
    __metadata("design:type", typeof (_d = typeof String !== "undefined" && String) === "function" ? _d : Object)
], Contact.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128 }),
    __metadata("design:type", typeof (_e = typeof String !== "undefined" && String) === "function" ? _e : Object)
], Contact.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128 }),
    __metadata("design:type", typeof (_f = typeof String !== "undefined" && String) === "function" ? _f : Object)
], Contact.prototype, "relation", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128 }),
    __metadata("design:type", typeof (_g = typeof String !== "undefined" && String) === "function" ? _g : Object)
], Contact.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Contact.prototype, "is_emergency_contact", void 0);
Contact = __decorate([
    (0, typeorm_1.Entity)('contacts')
], Contact);
exports.Contact = Contact;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/core/dto/change-password.dto.ts":
/*!***************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/core/dto/change-password.dto.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChangePasswordDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ChangePasswordDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The reset token sent to the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The new password for the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "newPassword", void 0);
exports.ChangePasswordDto = ChangePasswordDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/core/dto/mail-action.dto.ts":
/*!***********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/core/dto/mail-action.dto.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailActionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class MailActionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email of the user', example: 'johndoe@compyler.io' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MailActionDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email verification token', example: 'a9534ee0-b83b-445c-bee2-8fa2eb8585bb' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MailActionDto.prototype, "token", void 0);
exports.MailActionDto = MailActionDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/core/dto/reset-password.dto.ts":
/*!**************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/core/dto/reset-password.dto.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetPasswordDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ResetPasswordDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "email", void 0);
exports.ResetPasswordDto = ResetPasswordDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/core/dto/sign-in.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/core/dto/sign-in.dto.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthSignInDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AuthSignInDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthSignInDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The password of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthSignInDto.prototype, "password", void 0);
exports.AuthSignInDto = AuthSignInDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/core/dto/verify-email.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/core/dto/verify-email.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VerifyEmailDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class VerifyEmailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyEmailDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email verification token' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyEmailDto.prototype, "token", void 0);
exports.VerifyEmailDto = VerifyEmailDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/core/guards/passport-jwt.guard.ts":
/*!*****************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/core/guards/passport-jwt.guard.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PassportJwtAuthGuard = void 0;
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const public_decorator_1 = __webpack_require__(/*! ../../../../../../common/decorators/public.decorator */ "./apps/common/decorators/public.decorator.ts");
let PassportJwtAuthGuard = class PassportJwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
};
PassportJwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], PassportJwtAuthGuard);
exports.PassportJwtAuthGuard = PassportJwtAuthGuard;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/core/guards/passport-local.guard.ts":
/*!*******************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/core/guards/passport-local.guard.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PassportLocalGuard = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ../../auth.service */ "./apps/api-gateway/src/modules/auth/auth.service.ts");
let PassportLocalGuard = class PassportLocalGuard extends (0, passport_1.AuthGuard)("local") {
    constructor(authService) {
        super({ usernameField: "email" });
        this.authService = authService;
    }
    async validate(username, password) {
        const user = await this.authService.validateUser({ email: username, password: password });
        if (!user) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        return user;
    }
};
PassportLocalGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], PassportLocalGuard);
exports.PassportLocalGuard = PassportLocalGuard;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/core/strategies/jwt.strategy.ts":
/*!***************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/core/strategies/jwt.strategy.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }
    async validate(payload) {
        return { userId: payload.sub, email: payload.username };
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/core/strategies/local.strategy.ts":
/*!*****************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/core/strategies/local.strategy.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ../../auth.service */ "./apps/api-gateway/src/modules/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: 'email',
            passwordField: 'password'
        });
        this.authService = authService;
    }
    async validate(email, password) {
        const user = await this.authService.validateUser({ email: email, password: password });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/groups/dto/create-group.dto.ts":
/*!**************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/groups/dto/create-group.dto.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateGroupDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_group_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/groups/dto/user-group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/user-group.dto.ts");
const permission_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/permissions/dto/permission.dto */ "./apps/api-gateway/src/modules/auth/permissions/dto/permission.dto.ts");
class CreateGroupDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGroupDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'description' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGroupDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'userGroups', type: [user_group_dto_1.UserGroupDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => user_group_dto_1.UserGroupDto),
    __metadata("design:type", Array)
], CreateGroupDto.prototype, "userGroups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'permissions', type: [permission_dto_1.PermissionDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => permission_dto_1.PermissionDto),
    __metadata("design:type", Array)
], CreateGroupDto.prototype, "permissions", void 0);
exports.CreateGroupDto = CreateGroupDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/groups/dto/create-user-group-permissions.dto.ts":
/*!*******************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/groups/dto/create-user-group-permissions.dto.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserGroupPermissionDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/users/dto/user.dto */ "./apps/api-gateway/src/modules/auth/users/dto/user.dto.ts");
const group_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/groups/dto/group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/group.dto.ts");
const permission_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/permissions/dto/permission.dto */ "./apps/api-gateway/src/modules/auth/permissions/dto/permission.dto.ts");
class CreateUserGroupPermissionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user_group_permission_id' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserGroupPermissionDto.prototype, "user_group_permission_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user', type: [user_dto_1.UserDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => user_dto_1.UserDto),
    __metadata("design:type", typeof (_a = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _a : Object)
], CreateUserGroupPermissionDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'group', type: [group_dto_1.GroupDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => group_dto_1.GroupDto),
    __metadata("design:type", typeof (_b = typeof group_dto_1.GroupDto !== "undefined" && group_dto_1.GroupDto) === "function" ? _b : Object)
], CreateUserGroupPermissionDto.prototype, "group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'permission', type: [permission_dto_1.PermissionDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => permission_dto_1.PermissionDto),
    __metadata("design:type", typeof (_c = typeof permission_dto_1.PermissionDto !== "undefined" && permission_dto_1.PermissionDto) === "function" ? _c : Object)
], CreateUserGroupPermissionDto.prototype, "permission", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'granted_by', type: [user_dto_1.UserDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => user_dto_1.UserDto),
    __metadata("design:type", typeof (_d = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _d : Object)
], CreateUserGroupPermissionDto.prototype, "granted_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'granted_reason' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserGroupPermissionDto.prototype, "granted_reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'expires_at', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], CreateUserGroupPermissionDto.prototype, "expires_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'created_at', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], CreateUserGroupPermissionDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'updated_at', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], CreateUserGroupPermissionDto.prototype, "updated_at", void 0);
exports.CreateUserGroupPermissionDto = CreateUserGroupPermissionDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/groups/dto/create-user-group.dto.ts":
/*!*******************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/groups/dto/create-user-group.dto.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserGroupDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/users/dto/user.dto */ "./apps/api-gateway/src/modules/auth/users/dto/user.dto.ts");
const group_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/groups/dto/group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/group.dto.ts");
class CreateUserGroupDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user_group_id' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserGroupDto.prototype, "user_group_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user', type: [user_dto_1.UserDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => user_dto_1.UserDto),
    __metadata("design:type", typeof (_a = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _a : Object)
], CreateUserGroupDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'group', type: [group_dto_1.GroupDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => group_dto_1.GroupDto),
    __metadata("design:type", typeof (_b = typeof group_dto_1.GroupDto !== "undefined" && group_dto_1.GroupDto) === "function" ? _b : Object)
], CreateUserGroupDto.prototype, "group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'isActive' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Boolean)
], CreateUserGroupDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'created_at', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CreateUserGroupDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'updated_at', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CreateUserGroupDto.prototype, "updated_at", void 0);
exports.CreateUserGroupDto = CreateUserGroupDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/groups/dto/group.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/groups/dto/group.dto.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_group_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/groups/dto/user-group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/user-group.dto.ts");
const permission_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/permissions/dto/permission.dto */ "./apps/api-gateway/src/modules/auth/permissions/dto/permission.dto.ts");
class GroupDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'group_id' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GroupDto.prototype, "group_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GroupDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'description' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GroupDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'created_at', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], GroupDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'updated_at', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], GroupDto.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'userGroups', type: [user_group_dto_1.UserGroupDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => user_group_dto_1.UserGroupDto),
    __metadata("design:type", Array)
], GroupDto.prototype, "userGroups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'permissions', type: [permission_dto_1.PermissionDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => permission_dto_1.PermissionDto),
    __metadata("design:type", Array)
], GroupDto.prototype, "permissions", void 0);
exports.GroupDto = GroupDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/groups/dto/user-group.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/groups/dto/user-group.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserGroupDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/users/dto/user.dto */ "./apps/api-gateway/src/modules/auth/users/dto/user.dto.ts");
const group_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/groups/dto/group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/group.dto.ts");
class UserGroupDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user_group_id' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserGroupDto.prototype, "user_group_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user', type: [user_dto_1.UserDto] }),
    (0, class_transformer_1.Type)(() => user_dto_1.UserDto),
    __metadata("design:type", typeof (_a = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _a : Object)
], UserGroupDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'group', type: [group_dto_1.GroupDto] }),
    (0, class_transformer_1.Type)(() => group_dto_1.GroupDto),
    __metadata("design:type", typeof (_b = typeof group_dto_1.GroupDto !== "undefined" && group_dto_1.GroupDto) === "function" ? _b : Object)
], UserGroupDto.prototype, "group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'isActive' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Boolean)
], UserGroupDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'created_at', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserGroupDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'updated_at', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UserGroupDto.prototype, "updated_at", void 0);
exports.UserGroupDto = UserGroupDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/groups/entities/group.entity.ts":
/*!***************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/groups/entities/group.entity.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Group = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const permission_entity_1 = __webpack_require__(/*! ../../permissions/entities/permission.entity */ "./apps/api-gateway/src/modules/auth/permissions/entities/permission.entity.ts");
const user_group_entity_1 = __webpack_require__(/*! ./user-group.entity */ "./apps/api-gateway/src/modules/auth/groups/entities/user-group.entity.ts");
let Group = class Group {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Group.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80 }),
    __metadata("design:type", String)
], Group.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Group.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Group.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Group.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_group_entity_1.UserGroup, (userGroup) => userGroup.group),
    __metadata("design:type", Array)
], Group.prototype, "userGroups", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => permission_entity_1.Permission, permission => permission.groups),
    (0, typeorm_1.JoinTable)({
        name: 'group_permissions',
        joinColumn: { name: 'group_id', referencedColumnName: 'group_id' },
        inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'permission_id' },
    }),
    __metadata("design:type", Array)
], Group.prototype, "permissions", void 0);
Group = __decorate([
    (0, typeorm_1.Entity)('groups')
], Group);
exports.Group = Group;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/groups/entities/user-group-permissions.entity.ts":
/*!********************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/groups/entities/user-group-permissions.entity.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserGroupPermission = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const group_entity_1 = __webpack_require__(/*! ./group.entity */ "./apps/api-gateway/src/modules/auth/groups/entities/group.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../../users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
const permission_entity_1 = __webpack_require__(/*! ../../permissions/entities/permission.entity */ "./apps/api-gateway/src/modules/auth/permissions/entities/permission.entity.ts");
let UserGroupPermission = class UserGroupPermission {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], UserGroupPermission.prototype, "user_group_permission_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], UserGroupPermission.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_entity_1.Group, { eager: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "group_id" }),
    __metadata("design:type", typeof (_b = typeof group_entity_1.Group !== "undefined" && group_entity_1.Group) === "function" ? _b : Object)
], UserGroupPermission.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => permission_entity_1.Permission, { eager: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "permission_id" }),
    __metadata("design:type", typeof (_c = typeof permission_entity_1.Permission !== "undefined" && permission_entity_1.Permission) === "function" ? _c : Object)
], UserGroupPermission.prototype, "permission", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "granted_by" }),
    __metadata("design:type", typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object)
], UserGroupPermission.prototype, "granted_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], UserGroupPermission.prototype, "granted_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp with time zone", nullable: true }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], UserGroupPermission.prototype, "expires_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], UserGroupPermission.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], UserGroupPermission.prototype, "updated_at", void 0);
UserGroupPermission = __decorate([
    (0, typeorm_1.Entity)("user_group_permissions"),
    (0, typeorm_1.Unique)(["user", "group", "permission"])
], UserGroupPermission);
exports.UserGroupPermission = UserGroupPermission;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/groups/entities/user-group.entity.ts":
/*!********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/groups/entities/user-group.entity.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserGroup = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const group_entity_1 = __webpack_require__(/*! ./group.entity */ "./apps/api-gateway/src/modules/auth/groups/entities/group.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../../users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
let UserGroup = class UserGroup {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserGroup.prototype, "user_group_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userGroups, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], UserGroup.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_entity_1.Group, (group) => group.userGroups, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "group_id" }),
    __metadata("design:type", typeof (_b = typeof group_entity_1.Group !== "undefined" && group_entity_1.Group) === "function" ? _b : Object)
], UserGroup.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], UserGroup.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserGroup.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UserGroup.prototype, "updated_at", void 0);
UserGroup = __decorate([
    (0, typeorm_1.Entity)('user_group'),
    (0, typeorm_1.Unique)(['user', 'group'])
], UserGroup);
exports.UserGroup = UserGroup;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/groups/groups.controller.ts":
/*!***********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/groups/groups.controller.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupsController = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const groups_service_1 = __webpack_require__(/*! ./groups.service */ "./apps/api-gateway/src/modules/auth/groups/groups.service.ts");
const create_group_dto_1 = __webpack_require__(/*! ./dto/create-group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/create-group.dto.ts");
const create_user_group_dto_1 = __webpack_require__(/*! ./dto/create-user-group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/create-user-group.dto.ts");
const create_user_group_permissions_dto_1 = __webpack_require__(/*! ./dto/create-user-group-permissions.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/create-user-group-permissions.dto.ts");
let GroupsController = class GroupsController {
    constructor(groupsService) {
        this.groupsService = groupsService;
    }
    async createGroup(dto) {
        return this.groupsService.create(dto);
    }
    findAll() {
        return this.groupsService.findAll();
    }
    async getGroupById(groupId) {
        return this.groupsService.findOne(groupId);
    }
    async deleteGroup(groupId) {
        return this.groupsService.remove(groupId);
    }
    async addUserToGroup(dto) {
        return this.groupsService.addUserToGroup(dto);
    }
    async getUsersInGroup(groupId) {
        return this.groupsService.getUsersInGroup(groupId);
    }
    async removeUserFromGroup(groupId, userId) {
        return this.groupsService.removeUserFromGroup(groupId, userId);
    }
    async addPermissionToGroup(dto) {
        return this.groupsService.addPermissionToGroup(dto);
    }
    async getAllPermissions(groupId) {
        return this.groupsService.getPermissionsInGroup(groupId);
    }
    async removePermissionFromGroup(groupId, permissionId) {
        return this.groupsService.removePermissionFromGroup(groupId, permissionId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_group_dto_1.CreateGroupDto !== "undefined" && create_group_dto_1.CreateGroupDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "createGroup", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroupsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':groupId'),
    __param(0, (0, common_1.Param)('groupId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "getGroupById", null);
__decorate([
    (0, common_1.Delete)(':groupId'),
    __param(0, (0, common_1.Param)('groupId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "deleteGroup", null);
__decorate([
    (0, common_1.Post)('add/users'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_user_group_dto_1.CreateUserGroupDto !== "undefined" && create_user_group_dto_1.CreateUserGroupDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "addUserToGroup", null);
__decorate([
    (0, common_1.Get)(':groupId/users'),
    __param(0, (0, common_1.Param)('groupId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "getUsersInGroup", null);
__decorate([
    (0, common_1.Delete)(':groupId/users/:userId'),
    __param(0, (0, common_1.Param)('groupId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "removeUserFromGroup", null);
__decorate([
    (0, common_1.Post)('add/permissions'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof create_user_group_permissions_dto_1.CreateUserGroupPermissionDto !== "undefined" && create_user_group_permissions_dto_1.CreateUserGroupPermissionDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], GroupsController.prototype, "addPermissionToGroup", null);
__decorate([
    (0, common_1.Get)(':groupId/permissions'),
    __param(0, (0, common_1.Param)(':groupId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "getAllPermissions", null);
__decorate([
    (0, common_1.Delete)(':groupId/permissions/:permissionId'),
    __param(0, (0, common_1.Param)('groupId')),
    __param(1, (0, common_1.Param)('permissionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], GroupsController.prototype, "removePermissionFromGroup", null);
GroupsController = __decorate([
    (0, swagger_1.ApiTags)('Groups'),
    (0, common_1.Controller)('groups'),
    __metadata("design:paramtypes", [typeof (_a = typeof groups_service_1.GroupsService !== "undefined" && groups_service_1.GroupsService) === "function" ? _a : Object])
], GroupsController);
exports.GroupsController = GroupsController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/groups/groups.module.ts":
/*!*******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/groups/groups.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GroupsModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupsModule = void 0;
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @app/common/config */ "./apps/common/config/index.ts");
const helpers_1 = __webpack_require__(/*! @app/common/utils/helpers */ "./apps/common/utils/helpers.ts");
const groups_service_1 = __webpack_require__(/*! ./groups.service */ "./apps/api-gateway/src/modules/auth/groups/groups.service.ts");
const groups_controller_1 = __webpack_require__(/*! ./groups.controller */ "./apps/api-gateway/src/modules/auth/groups/groups.controller.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/api-gateway/src/modules/auth/users/users.module.ts");
const permissions_module_1 = __webpack_require__(/*! ../permissions/permissions.module */ "./apps/api-gateway/src/modules/auth/permissions/permissions.module.ts");
const group_entity_1 = __webpack_require__(/*! ./entities/group.entity */ "./apps/api-gateway/src/modules/auth/groups/entities/group.entity.ts");
const user_group_entity_1 = __webpack_require__(/*! ./entities/user-group.entity */ "./apps/api-gateway/src/modules/auth/groups/entities/user-group.entity.ts");
const user_group_permissions_entity_1 = __webpack_require__(/*! ./entities/user-group-permissions.entity */ "./apps/api-gateway/src/modules/auth/groups/entities/user-group-permissions.entity.ts");
let GroupsModule = GroupsModule_1 = class GroupsModule {
};
GroupsModule = GroupsModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ClientConfigModule,
            typeorm_1.TypeOrmModule.forFeature([group_entity_1.Group, user_group_entity_1.UserGroup, user_group_permissions_entity_1.UserGroupPermission]),
            (0, common_1.forwardRef)(() => permissions_module_1.PermissionsModule),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            core_1.RouterModule.register([
                {
                    path: '',
                    children: [
                        ...(0, helpers_1.appendSubPathsToBaseModule)('', [GroupsModule_1]),
                    ],
                },
            ]),
        ],
        controllers: [groups_controller_1.GroupsController],
        providers: [groups_service_1.GroupsService],
    })
], GroupsModule);
exports.GroupsModule = GroupsModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/groups/groups.service.ts":
/*!********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/groups/groups.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupsService = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const group_entity_1 = __webpack_require__(/*! ./entities/group.entity */ "./apps/api-gateway/src/modules/auth/groups/entities/group.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
const user_group_entity_1 = __webpack_require__(/*! ./entities/user-group.entity */ "./apps/api-gateway/src/modules/auth/groups/entities/user-group.entity.ts");
const permission_entity_1 = __webpack_require__(/*! ../permissions/entities/permission.entity */ "./apps/api-gateway/src/modules/auth/permissions/entities/permission.entity.ts");
let GroupsService = class GroupsService {
    constructor(groupRepo, userGroupRepo, userRepo, permissionRepo) {
        this.groupRepo = groupRepo;
        this.userGroupRepo = userGroupRepo;
        this.userRepo = userRepo;
        this.permissionRepo = permissionRepo;
    }
    async create(dto) {
        const permissionIds = dto.permissions?.map(p => p.permission_id) || [];
        const permissions = permissionIds.length
            ? await this.permissionRepo.findByIds(permissionIds)
            : [];
        if (permissionIds.length && permissions.length !== permissionIds.length) {
            throw new common_1.NotFoundException('One or more permissions not found');
        }
        const group = this.groupRepo.create({
            name: dto.name,
            description: dto.description,
            permissions,
        });
        const savedGroup = await this.groupRepo.save(group);
        const userIds = dto.userGroups?.map(ug => ug.user?.user_id) || [];
        if (userIds?.length) {
            const users = await this.userRepo.findByIds(userIds);
            if (users.length !== userIds.length) {
                throw new common_1.NotFoundException('One or more users not found');
            }
            const userGroups = users.map(user => this.userGroupRepo.create({ user, group: savedGroup }));
            await this.userGroupRepo.save(userGroups);
        }
        return this.groupRepo.findOne({
            where: { group_id: savedGroup.group_id },
            relations: ['permissions', 'userGroups', 'userGroups.user'],
        });
    }
    findAll() {
        return this.groupRepo.find();
    }
    async findOne(groupId) {
        const group = await this.groupRepo.findOne({
            where: { group_id: groupId },
        });
        if (!group)
            throw new common_1.NotFoundException("Group not found");
        return group;
    }
    async remove(groupId) {
        const group = await this.findOne(groupId);
        await this.groupRepo.remove(group);
    }
    async addUserToGroup(dto) {
        const group = await this.groupRepo.findOneBy({ group_id: dto.group.group_id });
        const user = await this.userRepo.findOneBy({ user_id: dto.user.user_id });
        if (!group || !user)
            throw new common_1.NotFoundException("Group or User not found");
        const existing_group = await this.userGroupRepo.findOne({
            where: { user: { user_id: dto.user.user_id }, group: { group_id: dto.group.group_id } },
            relations: ['user', 'group'],
        });
        if (existing_group)
            throw new common_1.ConflictException("User already in this group");
        const userGroup = this.userGroupRepo.create({ group, user });
        return this.userGroupRepo.save(userGroup);
    }
    async getUsersInGroup(groupId) {
        const group = await this.groupRepo.findOne({
            where: { group_id: groupId },
            relations: ['userGroups', 'userGroups.user'],
        });
        if (!group)
            throw new common_1.NotFoundException("Group not found");
        return group.userGroups.map((ug) => ug.user);
    }
    async removeUserFromGroup(user_id, group_id) {
        const user = await this.userRepo.findOneBy({ user_id });
        const group = await this.groupRepo.findOneBy({ group_id });
        if (!user || !group) {
            throw new common_1.NotFoundException('User or Group not found');
        }
        const userGroup = await this.userGroupRepo.findOne({
            where: {
                user: { user_id },
                group: { group_id },
            },
            relations: ['user', 'group'],
        });
        if (!userGroup) {
            throw new common_1.NotFoundException('User is not part of this group');
        }
        await this.userGroupRepo.remove(userGroup);
    }
    async addPermissionToGroup(dto) {
        const group = await this.groupRepo.findOne({
            where: { group_id: dto.group?.group_id },
            relations: ['permissions'],
        });
        if (!group) {
            throw new common_1.NotFoundException('Group not found');
        }
        const permissionId = dto.permission?.permission_id;
        if (!permissionId) {
            throw new common_1.BadRequestException('permission ID not provided');
        }
        const permission = await this.permissionRepo.findOne({
            where: { permission_id: permissionId },
        });
        if (!permission) {
            throw new common_1.NotFoundException('Permission not found');
        }
        const existingPermissionIds = group.permissions.map(p => p.permission_id);
        const isAlreadyAssigned = existingPermissionIds.includes(permissionId);
        if (isAlreadyAssigned) {
            throw new common_1.ConflictException('Permission already assigned to group');
        }
        group.permissions.push(permission);
        return this.groupRepo.save(group);
    }
    async getPermissionsInGroup(group_id) {
        const group = await this.groupRepo.findOne({
            where: { group_id: group_id },
            relations: ['permissions'],
        });
        if (!group)
            throw new common_1.NotFoundException("Group not found");
        return group.permissions;
    }
    async removePermissionFromGroup(groupId, permissionId) {
        const group = await this.groupRepo.findOne({
            where: { group_id: groupId },
            relations: ['permissions'],
        });
        if (!group)
            throw new common_1.NotFoundException('Group not found');
        const exists = group.permissions.some((perm) => {
            const permId = String(perm.permission_id).trim();
            const incomingId = String(permissionId).trim();
            return permId === incomingId;
        });
        if (!exists)
            throw new common_1.NotFoundException('Permission not assigned to group');
        group.permissions = group.permissions.filter((perm) => {
            const permId = String(perm.permission_id).trim();
            const incomingId = String(permissionId).trim();
            return permId !== incomingId;
        });
        await this.groupRepo.save(group);
    }
};
GroupsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(group_entity_1.Group)),
    __param(1, (0, typeorm_2.InjectRepository)(user_group_entity_1.UserGroup)),
    __param(2, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(3, (0, typeorm_2.InjectRepository)(permission_entity_1.Permission)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _d : Object])
], GroupsService);
exports.GroupsService = GroupsService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/permissions/dto/create-permission.dto.ts":
/*!************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/permissions/dto/create-permission.dto.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePermissionDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const role_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/roles/dto/role.dto */ "./apps/api-gateway/src/modules/auth/roles/dto/role.dto.ts");
const group_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/groups/dto/group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/group.dto.ts");
class CreatePermissionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'alias' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "alias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'description' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'roles', type: [role_dto_1.RoleDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => role_dto_1.RoleDto),
    __metadata("design:type", Array)
], CreatePermissionDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'groups', type: [group_dto_1.GroupDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => group_dto_1.GroupDto),
    __metadata("design:type", Array)
], CreatePermissionDto.prototype, "groups", void 0);
exports.CreatePermissionDto = CreatePermissionDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/permissions/dto/permission.dto.ts":
/*!*****************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/permissions/dto/permission.dto.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const role_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/roles/dto/role.dto */ "./apps/api-gateway/src/modules/auth/roles/dto/role.dto.ts");
const group_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/groups/dto/group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/group.dto.ts");
class PermissionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'permission_id' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PermissionDto.prototype, "permission_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PermissionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'alias' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PermissionDto.prototype, "alias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'description' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PermissionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'roles', type: [role_dto_1.RoleDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => role_dto_1.RoleDto),
    __metadata("design:type", Array)
], PermissionDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'groups', type: [group_dto_1.GroupDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => group_dto_1.GroupDto),
    __metadata("design:type", Array)
], PermissionDto.prototype, "groups", void 0);
exports.PermissionDto = PermissionDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/permissions/dto/update-permission.dto.ts":
/*!************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/permissions/dto/update-permission.dto.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePermissionDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const role_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/roles/dto/role.dto */ "./apps/api-gateway/src/modules/auth/roles/dto/role.dto.ts");
const group_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/groups/dto/group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/group.dto.ts");
class UpdatePermissionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'permission_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePermissionDto.prototype, "permission_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePermissionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'alias' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePermissionDto.prototype, "alias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'description' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePermissionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'roles', type: [role_dto_1.RoleDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => role_dto_1.RoleDto),
    __metadata("design:type", Array)
], UpdatePermissionDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'groups', type: [group_dto_1.GroupDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => group_dto_1.GroupDto),
    __metadata("design:type", Array)
], UpdatePermissionDto.prototype, "groups", void 0);
exports.UpdatePermissionDto = UpdatePermissionDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/permissions/entities/permission.entity.ts":
/*!*************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/permissions/entities/permission.entity.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Permission = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const role_entity_1 = __webpack_require__(/*! ../../roles/entities/role.entity */ "./apps/api-gateway/src/modules/auth/roles/entities/role.entity.ts");
const group_entity_1 = __webpack_require__(/*! ../../groups/entities/group.entity */ "./apps/api-gateway/src/modules/auth/groups/entities/group.entity.ts");
let Permission = class Permission {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Permission.prototype, "permission_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 80, unique: true }),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 80 }),
    __metadata("design:type", String)
], Permission.prototype, "alias", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Permission.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.Role, (role) => role.permissions),
    __metadata("design:type", Array)
], Permission.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => group_entity_1.Group, group => group.permissions),
    __metadata("design:type", Array)
], Permission.prototype, "groups", void 0);
Permission = __decorate([
    (0, typeorm_1.Entity)({ name: "permission" })
], Permission);
exports.Permission = Permission;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/permissions/permissions.controller.ts":
/*!*********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/permissions/permissions.controller.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const permissions_service_1 = __webpack_require__(/*! ./permissions.service */ "./apps/api-gateway/src/modules/auth/permissions/permissions.service.ts");
const update_permission_dto_1 = __webpack_require__(/*! ./dto/update-permission.dto */ "./apps/api-gateway/src/modules/auth/permissions/dto/update-permission.dto.ts");
const create_permission_dto_1 = __webpack_require__(/*! ./dto/create-permission.dto */ "./apps/api-gateway/src/modules/auth/permissions/dto/create-permission.dto.ts");
let PermissionsController = class PermissionsController {
    constructor(permissionsService) {
        this.permissionsService = permissionsService;
    }
    create(dto) {
        return this.permissionsService.create(dto);
    }
    findAll() {
        return this.permissionsService.findAll();
    }
    findOne(permissionId) {
        return this.permissionsService.findOne(permissionId);
    }
    update(permissionId, dto) {
        return this.permissionsService.update(permissionId, dto);
    }
    remove(permissionId) {
        return this.permissionsService.delete(permissionId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_permission_dto_1.CreatePermissionDto !== "undefined" && create_permission_dto_1.CreatePermissionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':permissionId'),
    __param(0, (0, common_1.Param)('permissionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':permissionId'),
    __param(0, (0, common_1.Param)('permissionId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_permission_dto_1.UpdatePermissionDto !== "undefined" && update_permission_dto_1.UpdatePermissionDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':permissionId'),
    __param(0, (0, common_1.Param)('permissionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PermissionsController.prototype, "remove", null);
PermissionsController = __decorate([
    (0, common_1.Controller)('permissions'),
    __metadata("design:paramtypes", [typeof (_a = typeof permissions_service_1.PermissionsService !== "undefined" && permissions_service_1.PermissionsService) === "function" ? _a : Object])
], PermissionsController);
exports.PermissionsController = PermissionsController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/permissions/permissions.module.ts":
/*!*****************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/permissions/permissions.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PermissionsModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const permissions_controller_1 = __webpack_require__(/*! ./permissions.controller */ "./apps/api-gateway/src/modules/auth/permissions/permissions.controller.ts");
const permissions_service_1 = __webpack_require__(/*! ./permissions.service */ "./apps/api-gateway/src/modules/auth/permissions/permissions.service.ts");
const config_1 = __webpack_require__(/*! @app/common/config */ "./apps/common/config/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const helpers_1 = __webpack_require__(/*! @app/common/utils/helpers */ "./apps/common/utils/helpers.ts");
const permission_entity_1 = __webpack_require__(/*! ./entities/permission.entity */ "./apps/api-gateway/src/modules/auth/permissions/entities/permission.entity.ts");
const groups_module_1 = __webpack_require__(/*! ../groups/groups.module */ "./apps/api-gateway/src/modules/auth/groups/groups.module.ts");
let PermissionsModule = PermissionsModule_1 = class PermissionsModule {
};
PermissionsModule = PermissionsModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ClientConfigModule,
            typeorm_1.TypeOrmModule.forFeature([permission_entity_1.Permission]),
            (0, common_1.forwardRef)(() => groups_module_1.GroupsModule),
            core_1.RouterModule.register([
                {
                    path: '',
                    children: [
                        ...(0, helpers_1.appendSubPathsToBaseModule)('', [PermissionsModule_1]),
                    ],
                },
            ]),
        ],
        providers: [permissions_service_1.PermissionsService],
        controllers: [permissions_controller_1.PermissionsController],
        exports: [permissions_service_1.PermissionsService, typeorm_1.TypeOrmModule]
    })
], PermissionsModule);
exports.PermissionsModule = PermissionsModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/permissions/permissions.service.ts":
/*!******************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/permissions/permissions.service.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const permission_entity_1 = __webpack_require__(/*! ./entities/permission.entity */ "./apps/api-gateway/src/modules/auth/permissions/entities/permission.entity.ts");
let PermissionsService = class PermissionsService {
    constructor(permissionRepo) {
        this.permissionRepo = permissionRepo;
    }
    create(dto) {
        const permission = this.permissionRepo.create(dto);
        return this.permissionRepo.save(permission);
    }
    findAll() {
        return this.permissionRepo.find();
    }
    async findOne(permissionId) {
        const permission = await this.permissionRepo.findOne({ where: { permission_id: permissionId } });
        if (!permission) {
            throw new common_1.NotFoundException('Permission not found');
        }
        return permission;
    }
    async update(permissionId, dto) {
        const permission = await this.permissionRepo.findOne({ where: { permission_id: permissionId } });
        if (!permission) {
            throw new common_1.NotFoundException('Permission not found');
        }
        Object.assign(permission, dto);
        return this.permissionRepo.save(permission);
    }
    async delete(permissionId) {
        const permission = await this.permissionRepo.findOne({ where: { permission_id: permissionId } });
        if (!permission) {
            throw new common_1.NotFoundException(`Permission with ID ${permissionId} not found`);
        }
        await this.permissionRepo.remove(permission);
        return { message: `Permisson with ID ${permissionId} has been deleted successfully` };
    }
};
PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(permission_entity_1.Permission)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PermissionsService);
exports.PermissionsService = PermissionsService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/roles/dto/create-role.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/roles/dto/create-role.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRoleDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/users/dto/user.dto */ "./apps/api-gateway/src/modules/auth/users/dto/user.dto.ts");
const permission_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/permissions/dto/permission.dto */ "./apps/api-gateway/src/modules/auth/permissions/dto/permission.dto.ts");
class CreateRoleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'alias' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "alias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'description' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'users', type: [user_dto_1.UserDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => user_dto_1.UserDto),
    __metadata("design:type", Array)
], CreateRoleDto.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'permissions', type: [permission_dto_1.PermissionDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => permission_dto_1.PermissionDto),
    __metadata("design:type", Array)
], CreateRoleDto.prototype, "permissions", void 0);
exports.CreateRoleDto = CreateRoleDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/roles/dto/role.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/roles/dto/role.dto.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/users/dto/user.dto */ "./apps/api-gateway/src/modules/auth/users/dto/user.dto.ts");
const permission_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/permissions/dto/permission.dto */ "./apps/api-gateway/src/modules/auth/permissions/dto/permission.dto.ts");
class RoleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'role_id' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RoleDto.prototype, "role_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'alias' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoleDto.prototype, "alias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'description' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'users', type: [user_dto_1.UserDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => user_dto_1.UserDto),
    __metadata("design:type", Array)
], RoleDto.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'permissions', type: [permission_dto_1.PermissionDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => permission_dto_1.PermissionDto),
    __metadata("design:type", Array)
], RoleDto.prototype, "permissions", void 0);
exports.RoleDto = RoleDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/roles/dto/update-role.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/roles/dto/update-role.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRoleDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const user_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/users/dto/user.dto */ "./apps/api-gateway/src/modules/auth/users/dto/user.dto.ts");
const permission_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/permissions/dto/permission.dto */ "./apps/api-gateway/src/modules/auth/permissions/dto/permission.dto.ts");
class UpdateRoleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'role_id' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateRoleDto.prototype, "role_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'alias' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRoleDto.prototype, "alias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'description' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRoleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'users', type: [user_dto_1.UserDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => user_dto_1.UserDto),
    __metadata("design:type", Array)
], UpdateRoleDto.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'permissions', type: [permission_dto_1.PermissionDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => permission_dto_1.PermissionDto),
    __metadata("design:type", Array)
], UpdateRoleDto.prototype, "permissions", void 0);
exports.UpdateRoleDto = UpdateRoleDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/roles/entities/role.entity.ts":
/*!*************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/roles/entities/role.entity.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Role = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
const permission_entity_1 = __webpack_require__(/*! ../../permissions/entities/permission.entity */ "./apps/api-gateway/src/modules/auth/permissions/entities/permission.entity.ts");
let Role = class Role {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Role.prototype, "role_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 80, unique: true }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 80 }),
    __metadata("design:type", String)
], Role.prototype, "alias", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.roles),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => permission_entity_1.Permission, (permission) => permission.roles, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'role_permissions' }),
    __metadata("design:type", Array)
], Role.prototype, "permissions", void 0);
Role = __decorate([
    (0, typeorm_1.Entity)({ name: "role" })
], Role);
exports.Role = Role;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/roles/roles.controller.ts":
/*!*********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/roles/roles.controller.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const roles_service_1 = __webpack_require__(/*! ./roles.service */ "./apps/api-gateway/src/modules/auth/roles/roles.service.ts");
const create_role_dto_1 = __webpack_require__(/*! ./dto/create-role.dto */ "./apps/api-gateway/src/modules/auth/roles/dto/create-role.dto.ts");
const update_role_dto_1 = __webpack_require__(/*! ./dto/update-role.dto */ "./apps/api-gateway/src/modules/auth/roles/dto/update-role.dto.ts");
let RolesController = class RolesController {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    create(dto) {
        return this.rolesService.create(dto);
    }
    findAll() {
        return this.rolesService.findAll();
    }
    findOne(roleId) {
        return this.rolesService.findOne(roleId);
    }
    update(roleId, dto) {
        return this.rolesService.update(roleId, dto);
    }
    remove(roleId) {
        return this.rolesService.delete(roleId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_role_dto_1.CreateRoleDto !== "undefined" && create_role_dto_1.CreateRoleDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':roleId'),
    __param(0, (0, common_1.Param)('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':roleId'),
    __param(0, (0, common_1.Param)('roleId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof update_role_dto_1.UpdateRoleDto !== "undefined" && update_role_dto_1.UpdateRoleDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':roleId'),
    __param(0, (0, common_1.Param)('roleId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "remove", null);
RolesController = __decorate([
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [typeof (_a = typeof roles_service_1.RolesService !== "undefined" && roles_service_1.RolesService) === "function" ? _a : Object])
], RolesController);
exports.RolesController = RolesController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/roles/roles.module.ts":
/*!*****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/roles/roles.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RolesModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const roles_service_1 = __webpack_require__(/*! ./roles.service */ "./apps/api-gateway/src/modules/auth/roles/roles.service.ts");
const roles_controller_1 = __webpack_require__(/*! ./roles.controller */ "./apps/api-gateway/src/modules/auth/roles/roles.controller.ts");
const config_1 = __webpack_require__(/*! @app/common/config */ "./apps/common/config/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const helpers_1 = __webpack_require__(/*! @app/common/utils/helpers */ "./apps/common/utils/helpers.ts");
const role_entity_1 = __webpack_require__(/*! ./entities/role.entity */ "./apps/api-gateway/src/modules/auth/roles/entities/role.entity.ts");
const permissions_module_1 = __webpack_require__(/*! ../permissions/permissions.module */ "./apps/api-gateway/src/modules/auth/permissions/permissions.module.ts");
let RolesModule = RolesModule_1 = class RolesModule {
};
RolesModule = RolesModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ClientConfigModule,
            permissions_module_1.PermissionsModule,
            typeorm_1.TypeOrmModule.forFeature([role_entity_1.Role]),
            core_1.RouterModule.register([
                {
                    path: '',
                    children: [
                        ...(0, helpers_1.appendSubPathsToBaseModule)('', [RolesModule_1]),
                    ],
                },
            ]),
        ],
        providers: [roles_service_1.RolesService],
        controllers: [roles_controller_1.RolesController],
        exports: [roles_service_1.RolesService, typeorm_1.TypeOrmModule]
    })
], RolesModule);
exports.RolesModule = RolesModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/roles/roles.service.ts":
/*!******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/roles/roles.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const permission_entity_1 = __webpack_require__(/*! ../permissions/entities/permission.entity */ "./apps/api-gateway/src/modules/auth/permissions/entities/permission.entity.ts");
const role_entity_1 = __webpack_require__(/*! ./entities/role.entity */ "./apps/api-gateway/src/modules/auth/roles/entities/role.entity.ts");
let RolesService = class RolesService {
    constructor(roleRepo, permissionRepo) {
        this.roleRepo = roleRepo;
        this.permissionRepo = permissionRepo;
    }
    async create(dto) {
        const permissions = dto.permissions?.length
            ? await this.permissionRepo.findBy({ permission_id: (0, typeorm_2.In)(dto.permissions) })
            : [];
        const role = this.roleRepo.create({
            name: dto.name,
            alias: dto.alias,
            description: dto.description,
            permissions,
        });
        return this.roleRepo.save(role);
    }
    findAll() {
        return this.roleRepo.find({ relations: ['permissions'] });
    }
    async findOne(roleId) {
        const role = await this.roleRepo.findOne({ where: { role_id: roleId } });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        return role;
    }
    async update(roleId, dto) {
        const role = await this.roleRepo.findOne({ where: { role_id: roleId } });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        Object.assign(role, dto);
        return this.roleRepo.save(role);
    }
    async delete(roleId) {
        const role = await this.roleRepo.findOne({ where: { role_id: roleId } });
        if (!role) {
            throw new common_1.NotFoundException(`Role with ID ${roleId} not found`);
        }
        await this.roleRepo.remove(role);
        return { message: `Role with ID ${roleId} has been deleted successfully` };
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(1, (0, typeorm_1.InjectRepository)(permission_entity_1.Permission)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], RolesService);
exports.RolesService = RolesService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/users/dto/assign-role.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/users/dto/assign-role.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssignRoleDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AssignRoleDto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], AssignRoleDto.prototype, "roleIds", void 0);
exports.AssignRoleDto = AssignRoleDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/users/dto/create-user.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/users/dto/create-user.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const gender_enum_1 = __webpack_require__(/*! @lib/contracts/auth/users/enums/gender.enum */ "./libs/contracts/src/auth/users/enums/gender.enum.ts");
const role_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/roles/dto/role.dto */ "./apps/api-gateway/src/modules/auth/roles/dto/role.dto.ts");
const user_group_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/groups/dto/user-group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/user-group.dto.ts");
const contact_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/contacts/dto/contact.dto */ "./apps/api-gateway/src/modules/auth/contacts/dto/contact.dto.ts");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'first_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'last_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'email' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'phone_number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'identification_number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "identification_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'photo_url' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "photo_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'gender', enum: gender_enum_1.Gender }),
    (0, class_validator_1.IsEnum)(gender_enum_1.Gender),
    __metadata("design:type", typeof (_a = typeof gender_enum_1.Gender !== "undefined" && gender_enum_1.Gender) === "function" ? _a : Object)
], CreateUserDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'date_of_birth', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateUserDto.prototype, "date_of_birth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'employer_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "employer_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'occupation_status' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "occupation_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'occupation_location' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "occupation_location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'roles', type: [role_dto_1.RoleDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => role_dto_1.RoleDto),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'userGroups', type: [user_group_dto_1.UserGroupDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => user_group_dto_1.UserGroupDto),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "userGroups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'contacts', type: [contact_dto_1.ContactDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => contact_dto_1.ContactDto),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "contacts", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/users/dto/update-user.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/users/dto/update-user.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const gender_enum_1 = __webpack_require__(/*! @lib/contracts/auth/users/enums/gender.enum */ "./libs/contracts/src/auth/users/enums/gender.enum.ts");
const role_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/roles/dto/role.dto */ "./apps/api-gateway/src/modules/auth/roles/dto/role.dto.ts");
const user_group_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/groups/dto/user-group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/user-group.dto.ts");
const contact_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/contacts/dto/contact.dto */ "./apps/api-gateway/src/modules/auth/contacts/dto/contact.dto.ts");
class UpdateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'user_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'first_name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'last_name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'email' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof String !== "undefined" && String) === "function" ? _a : Object)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'phone_number' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'identification_number' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "identification_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'photo_url' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "photo_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'gender', enum: gender_enum_1.Gender }),
    (0, class_validator_1.IsEnum)(gender_enum_1.Gender),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof gender_enum_1.Gender !== "undefined" && gender_enum_1.Gender) === "function" ? _b : Object)
], UpdateUserDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'date_of_birth', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UpdateUserDto.prototype, "date_of_birth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'employer_name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "employer_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'occupation_status' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "occupation_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'occupation_location' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "occupation_location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'roles', type: [role_dto_1.RoleDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => role_dto_1.RoleDto),
    __metadata("design:type", Array)
], UpdateUserDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'userGroups', type: [user_group_dto_1.UserGroupDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => user_group_dto_1.UserGroupDto),
    __metadata("design:type", Array)
], UpdateUserDto.prototype, "userGroups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'contacts', type: [contact_dto_1.ContactDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => contact_dto_1.ContactDto),
    __metadata("design:type", Array)
], UpdateUserDto.prototype, "contacts", void 0);
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/users/dto/user.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/users/dto/user.dto.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const gender_enum_1 = __webpack_require__(/*! @lib/contracts/auth/users/enums/gender.enum */ "./libs/contracts/src/auth/users/enums/gender.enum.ts");
const role_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/roles/dto/role.dto */ "./apps/api-gateway/src/modules/auth/roles/dto/role.dto.ts");
const user_group_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/groups/dto/user-group.dto */ "./apps/api-gateway/src/modules/auth/groups/dto/user-group.dto.ts");
const contact_dto_1 = __webpack_require__(/*! apps/api-gateway/src/modules/auth/contacts/dto/contact.dto */ "./apps/api-gateway/src/modules/auth/contacts/dto/contact.dto.ts");
class UserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user_id' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'first_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'last_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'email' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'phone_number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'identification_number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "identification_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'photo_url' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "photo_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'gender', enum: gender_enum_1.Gender }),
    (0, class_validator_1.IsEnum)(gender_enum_1.Gender),
    __metadata("design:type", typeof (_a = typeof gender_enum_1.Gender !== "undefined" && gender_enum_1.Gender) === "function" ? _a : Object)
], UserDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'date_of_birth', type: String, format: 'date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserDto.prototype, "date_of_birth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'employer_name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "employer_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'occupation_status' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "occupation_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'occupation_location' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "occupation_location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'roles', type: [role_dto_1.RoleDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => role_dto_1.RoleDto),
    __metadata("design:type", Array)
], UserDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'userGroups', type: [user_group_dto_1.UserGroupDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => user_group_dto_1.UserGroupDto),
    __metadata("design:type", Array)
], UserDto.prototype, "userGroups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'contacts', type: [contact_dto_1.ContactDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => contact_dto_1.ContactDto),
    __metadata("design:type", Array)
], UserDto.prototype, "contacts", void 0);
exports.UserDto = UserDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/users/entities/user-credentials.entity.ts":
/*!*************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/users/entities/user-credentials.entity.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCredentials = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
let UserCredentials = class UserCredentials {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], UserCredentials.prototype, "user_credentials_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.credentials),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], UserCredentials.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserCredentials.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserCredentials.prototype, "login_provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserCredentials.prototype, "verification_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserCredentials.prototype, "reset_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserCredentials.prototype, "is_subscribed_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserCredentials.prototype, "is_disabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserCredentials.prototype, "is_verified", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserCredentials.prototype, "is_subscribed", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserCredentials.prototype, "is_onboarded", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserCredentials.prototype, "is_approved", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserCredentials.prototype, "is_rejected", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz", nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserCredentials.prototype, "last_login_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz", nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserCredentials.prototype, "current_login_time", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UserCredentials.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], UserCredentials.prototype, "updated_at", void 0);
UserCredentials = __decorate([
    (0, typeorm_1.Entity)("user_credentials")
], UserCredentials);
exports.UserCredentials = UserCredentials;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts":
/*!*************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const gender_enum_1 = __webpack_require__(/*! @lib/contracts/auth/users/enums/gender.enum */ "./libs/contracts/src/auth/users/enums/gender.enum.ts");
const role_entity_1 = __webpack_require__(/*! ../../roles/entities/role.entity */ "./apps/api-gateway/src/modules/auth/roles/entities/role.entity.ts");
const contact_entity_1 = __webpack_require__(/*! ../../contacts/entities/contact.entity */ "./apps/api-gateway/src/modules/auth/contacts/entities/contact.entity.ts");
const user_group_entity_1 = __webpack_require__(/*! ../../groups/entities/user-group.entity */ "./apps/api-gateway/src/modules/auth/groups/entities/user-group.entity.ts");
const media_entity_1 = __webpack_require__(/*! ../../../resources/entities/media.entity */ "./apps/api-gateway/src/modules/resources/entities/media.entity.ts");
const user_credentials_entity_1 = __webpack_require__(/*! ./user-credentials.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user-credentials.entity.ts");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 128 }),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 128 }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, type: "varchar", length: 80 }),
    __metadata("design:type", typeof (_a = typeof String !== "undefined" && String) === "function" ? _a : Object)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], User.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 80 }),
    __metadata("design:type", String)
], User.prototype, "identification_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 128 }),
    __metadata("design:type", String)
], User.prototype, "photo_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: gender_enum_1.Gender }),
    __metadata("design:type", typeof (_b = typeof gender_enum_1.Gender !== "undefined" && gender_enum_1.Gender) === "function" ? _b : Object)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], User.prototype, "date_of_birth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 128 }),
    __metadata("design:type", String)
], User.prototype, "employer_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 128 }),
    __metadata("design:type", String)
], User.prototype, "occupation_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 128 }),
    __metadata("design:type", String)
], User.prototype, "occupation_location", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.Role, (role) => role.users),
    (0, typeorm_1.JoinTable)({ name: 'user_roles' }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_group_entity_1.UserGroup, (userGroup) => userGroup.user),
    __metadata("design:type", Array)
], User.prototype, "userGroups", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contact_entity_1.Contact, (contact) => contact.user),
    __metadata("design:type", Array)
], User.prototype, "contacts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => media_entity_1.Media, (media) => media.uploaded_by),
    __metadata("design:type", Array)
], User.prototype, "media", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_credentials_entity_1.UserCredentials, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'credentials_id' }),
    __metadata("design:type", typeof (_d = typeof user_credentials_entity_1.UserCredentials !== "undefined" && user_credentials_entity_1.UserCredentials) === "function" ? _d : Object)
], User.prototype, "credentials", void 0);
User = __decorate([
    (0, typeorm_1.Entity)({ name: "user" })
], User);
exports.User = User;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/users/users.controller.ts":
/*!*********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/users/users.controller.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/api-gateway/src/modules/auth/users/users.service.ts");
const create_user_dto_1 = __webpack_require__(/*! ./dto/create-user.dto */ "./apps/api-gateway/src/modules/auth/users/dto/create-user.dto.ts");
const assign_role_dto_1 = __webpack_require__(/*! ./dto/assign-role.dto */ "./apps/api-gateway/src/modules/auth/users/dto/assign-role.dto.ts");
const update_user_dto_1 = __webpack_require__(/*! ./dto/update-user.dto */ "./apps/api-gateway/src/modules/auth/users/dto/update-user.dto.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(dto) {
        return this.usersService.create(dto);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOne(userId) {
        return this.usersService.findOne(userId);
    }
    async updateUser(userId, dto) {
        return this.usersService.updateUser(userId, dto);
    }
    async assignRoles(userId, dto) {
        return this.usersService.assignRoleToUser(userId, dto.roleIds);
    }
    async removeRole(userId, roleId) {
        return this.usersService.removeRoleFromUser(userId, roleId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Patch)(':userId/roles'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof assign_role_dto_1.AssignRoleDto !== "undefined" && assign_role_dto_1.AssignRoleDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "assignRoles", null);
__decorate([
    (0, common_1.Delete)(':userId/roles/:roleId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeRole", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/users/users.module.ts":
/*!*****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/users/users.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UsersModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/api-gateway/src/modules/auth/users/users.service.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./apps/api-gateway/src/modules/auth/users/users.controller.ts");
const config_1 = __webpack_require__(/*! @app/common/config */ "./apps/common/config/index.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const helpers_1 = __webpack_require__(/*! @app/common/utils/helpers */ "./apps/common/utils/helpers.ts");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
const roles_module_1 = __webpack_require__(/*! ../roles/roles.module */ "./apps/api-gateway/src/modules/auth/roles/roles.module.ts");
const groups_module_1 = __webpack_require__(/*! ../groups/groups.module */ "./apps/api-gateway/src/modules/auth/groups/groups.module.ts");
const contacts_module_1 = __webpack_require__(/*! ../contacts/contacts.module */ "./apps/api-gateway/src/modules/auth/contacts/contacts.module.ts");
let UsersModule = UsersModule_1 = class UsersModule {
};
UsersModule = UsersModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ClientConfigModule,
            roles_module_1.RolesModule,
            groups_module_1.GroupsModule,
            (0, common_1.forwardRef)(() => contacts_module_1.ContactsModule),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            core_1.RouterModule.register([
                {
                    path: '',
                    children: [
                        ...(0, helpers_1.appendSubPathsToBaseModule)('', [UsersModule_1]),
                    ],
                },
            ]),
        ],
        providers: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UsersService, typeorm_1.TypeOrmModule]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/auth/users/users.service.ts":
/*!******************************************************************!*\
  !*** ./apps/api-gateway/src/modules/auth/users/users.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
const role_entity_1 = __webpack_require__(/*! ../roles/entities/role.entity */ "./apps/api-gateway/src/modules/auth/roles/entities/role.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let UsersService = class UsersService {
    constructor(userRepo, roleRepo) {
        this.userRepo = userRepo;
        this.roleRepo = roleRepo;
    }
    async create(dto) {
        let roles = [];
        if (dto.roles && Array.isArray(dto.roles) && dto.roles.length) {
            roles = await this.roleRepo.findBy({
                role_id: (0, typeorm_2.In)(dto.roles),
            });
        }
        const user = this.userRepo.create({
            ...dto,
            roles,
        });
        return this.userRepo.save(user);
    }
    findAll() {
        return this.userRepo.find({ relations: ['roles', 'roles.permissions'] });
    }
    async findOne(userId) {
        const user = await this.userRepo.findOne({ where: { user_id: userId } });
        if (!user)
            throw new common_1.NotFoundException("User not found");
        return user;
    }
    async updateUser(userId, dto) {
        const user = await this.userRepo.findOne({ where: { user_id: userId } });
        if (!user)
            throw new common_1.NotFoundException("User not found");
        Object.assign(user, dto);
        return this.userRepo.save(user);
    }
    async assignRoleToUser(userId, roleIds) {
        const user = await this.userRepo.findOne({
            where: { user_id: userId },
            relations: ['roles']
        });
        if (!user)
            throw new common_1.NotFoundException("User not found");
        const rolesToAdd = await this.roleRepo.findBy({
            role_id: (0, typeorm_2.In)(roleIds),
        });
        const existingRoleIds = user.roles.map(r => r.role_id);
        const newRoleIds = rolesToAdd.filter(r => !existingRoleIds.includes(r.role_id));
        user.roles.push(...newRoleIds);
        return this.userRepo.save(user);
    }
    async removeRoleFromUser(userId, roleId) {
        const user = await this.userRepo.findOne({
            where: { user_id: userId },
            relations: ['roles']
        });
        if (!user)
            throw new common_1.NotFoundException("User not found");
        user.roles = user.roles.filter(r => r.role_id !== roleId);
        return this.userRepo.save(user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/billing-routing.module.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/billing-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BillingRoutingModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const billing_module_1 = __webpack_require__(/*! ./billing.module */ "./apps/api-gateway/src/modules/billing/billing.module.ts");
const invoice_module_1 = __webpack_require__(/*! ./invoice/invoice.module */ "./apps/api-gateway/src/modules/billing/invoice/invoice.module.ts");
const transaction_module_1 = __webpack_require__(/*! ./transaction/transaction.module */ "./apps/api-gateway/src/modules/billing/transaction/transaction.module.ts");
const payment_module_1 = __webpack_require__(/*! ./payment/payment.module */ "./apps/api-gateway/src/modules/billing/payment/payment.module.ts");
let BillingRoutingModule = class BillingRoutingModule {
};
BillingRoutingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            core_1.RouterModule.register([
                {
                    path: 'billing',
                    module: billing_module_1.BillingModule,
                    children: [
                        {
                            path: 'invoice',
                            module: invoice_module_1.InvoiceModule,
                        },
                        {
                            path: 'transaction',
                            module: transaction_module_1.TransactionModule,
                        },
                        {
                            path: 'payment',
                            module: payment_module_1.PaymentModule,
                        },
                        {
                            path: 'entity-billable',
                            module: billing_module_1.BillingModule,
                        }
                    ],
                },
            ]),
        ],
    })
], BillingRoutingModule);
exports.BillingRoutingModule = BillingRoutingModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/billing.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/billing.controller.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BillingController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let BillingController = class BillingController {
};
BillingController = __decorate([
    (0, common_1.Controller)('billing')
], BillingController);
exports.BillingController = BillingController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/billing.module.ts":
/*!****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/billing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BillingModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const billing_controller_1 = __webpack_require__(/*! ./billing.controller */ "./apps/api-gateway/src/modules/billing/billing.controller.ts");
const billing_service_1 = __webpack_require__(/*! ./billing.service */ "./apps/api-gateway/src/modules/billing/billing.service.ts");
const invoice_module_1 = __webpack_require__(/*! ./invoice/invoice.module */ "./apps/api-gateway/src/modules/billing/invoice/invoice.module.ts");
const payment_module_1 = __webpack_require__(/*! ./payment/payment.module */ "./apps/api-gateway/src/modules/billing/payment/payment.module.ts");
const transaction_module_1 = __webpack_require__(/*! ./transaction/transaction.module */ "./apps/api-gateway/src/modules/billing/transaction/transaction.module.ts");
const entity_billable_module_1 = __webpack_require__(/*! ./entity-billable/entity-billable.module */ "./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.module.ts");
let BillingModule = class BillingModule {
};
BillingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            invoice_module_1.InvoiceModule,
            payment_module_1.PaymentModule,
            transaction_module_1.TransactionModule,
            entity_billable_module_1.EntityBillableModule,
        ],
        controllers: [billing_controller_1.BillingController],
        providers: [billing_service_1.BillingService]
    })
], BillingModule);
exports.BillingModule = BillingModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/billing.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/billing.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BillingService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let BillingService = class BillingService {
};
BillingService = __decorate([
    (0, common_1.Injectable)()
], BillingService);
exports.BillingService = BillingService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/entity-billable/dto/create-entity-billable.dto.ts":
/*!************************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/entity-billable/dto/create-entity-billable.dto.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateEntityBillableDto = void 0;
const billable_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/billable-type.enum */ "./libs/contracts/src/billing/enums/billable-type.enum.ts");
const entity_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/entity-type.enum */ "./libs/contracts/src/billing/enums/entity-type.enum.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateEntityBillableDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Entity ID (e.g. user_id, contract_id)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateEntityBillableDto.prototype, "entity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: entity_type_enum_1.EntityTypeEnum }),
    (0, class_validator_1.IsEnum)(entity_type_enum_1.EntityTypeEnum),
    __metadata("design:type", typeof (_a = typeof entity_type_enum_1.EntityTypeEnum !== "undefined" && entity_type_enum_1.EntityTypeEnum) === "function" ? _a : Object)
], CreateEntityBillableDto.prototype, "entity_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the billable item (e.g. invoice_id)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateEntityBillableDto.prototype, "billable_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: billable_type_enum_1.BillableTypeEnum }),
    (0, class_validator_1.IsEnum)(billable_type_enum_1.BillableTypeEnum),
    __metadata("design:type", typeof (_b = typeof billable_type_enum_1.BillableTypeEnum !== "undefined" && billable_type_enum_1.BillableTypeEnum) === "function" ? _b : Object)
], CreateEntityBillableDto.prototype, "billable_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CreateEntityBillableDto.prototype, "start_period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CreateEntityBillableDto.prototype, "end_period", void 0);
exports.CreateEntityBillableDto = CreateEntityBillableDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.controller.ts":
/*!********************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.controller.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityBillableController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const entity_billable_service_1 = __webpack_require__(/*! ./entity-billable.service */ "./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.service.ts");
const create_entity_billable_dto_1 = __webpack_require__(/*! ./dto/create-entity-billable.dto */ "./apps/api-gateway/src/modules/billing/entity-billable/dto/create-entity-billable.dto.ts");
const entity_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/entity-type.enum */ "./libs/contracts/src/billing/enums/entity-type.enum.ts");
const billable_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/billable-type.enum */ "./libs/contracts/src/billing/enums/billable-type.enum.ts");
let EntityBillableController = class EntityBillableController {
    constructor(billableService) {
        this.billableService = billableService;
    }
    async create(dto) {
        return this.billableService.create(dto);
    }
    findLinkedInvoices(entityId, entityType, billableType, billableId) {
        return this.billableService.findInvoicesLinkedToEntity(entityId, entityType, billableType, billableId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_entity_billable_dto_1.CreateEntityBillableDto !== "undefined" && create_entity_billable_dto_1.CreateEntityBillableDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], EntityBillableController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiQuery)({ name: 'entity_id', type: String }),
    (0, swagger_1.ApiQuery)({ name: 'entity_type', enum: entity_type_enum_1.EntityTypeEnum }),
    (0, swagger_1.ApiQuery)({ name: 'billable_type', enum: billable_type_enum_1.BillableTypeEnum }),
    (0, swagger_1.ApiQuery)({ name: 'billable_id', type: String }),
    __param(0, (0, common_1.Query)('entity_id')),
    __param(1, (0, common_1.Query)('entity_type')),
    __param(2, (0, common_1.Query)('billable_type')),
    __param(3, (0, common_1.Query)('billable_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof entity_type_enum_1.EntityTypeEnum !== "undefined" && entity_type_enum_1.EntityTypeEnum) === "function" ? _c : Object, typeof (_d = typeof billable_type_enum_1.BillableTypeEnum !== "undefined" && billable_type_enum_1.BillableTypeEnum) === "function" ? _d : Object, String]),
    __metadata("design:returntype", void 0)
], EntityBillableController.prototype, "findLinkedInvoices", null);
EntityBillableController = __decorate([
    (0, swagger_1.ApiTags)('Entity Billables'),
    (0, common_1.Controller)('entity-billable'),
    __metadata("design:paramtypes", [typeof (_a = typeof entity_billable_service_1.EntityBillableService !== "undefined" && entity_billable_service_1.EntityBillableService) === "function" ? _a : Object])
], EntityBillableController);
exports.EntityBillableController = EntityBillableController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.module.ts":
/*!****************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityBillableModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const entity_billable_entity_1 = __webpack_require__(/*! ./entity/entity-billable.entity */ "./apps/api-gateway/src/modules/billing/entity-billable/entity/entity-billable.entity.ts");
const payment_type_entity_1 = __webpack_require__(/*! ../payment/entities/payment-type.entity */ "./apps/api-gateway/src/modules/billing/payment/entities/payment-type.entity.ts");
const entity_billable_controller_1 = __webpack_require__(/*! ./entity-billable.controller */ "./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.controller.ts");
const entity_billable_service_1 = __webpack_require__(/*! ./entity-billable.service */ "./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.service.ts");
const invoice_entity_1 = __webpack_require__(/*! ../invoice/entities/invoice.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice.entity.ts");
let EntityBillableModule = class EntityBillableModule {
};
EntityBillableModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entity_billable_entity_1.EntityBillable, payment_type_entity_1.PaymentType, invoice_entity_1.Invoice])],
        controllers: [entity_billable_controller_1.EntityBillableController],
        providers: [entity_billable_service_1.EntityBillableService],
        exports: [entity_billable_service_1.EntityBillableService],
    })
], EntityBillableModule);
exports.EntityBillableModule = EntityBillableModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.service.ts":
/*!*****************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.service.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityBillableService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const payment_type_entity_1 = __webpack_require__(/*! ../payment/entities/payment-type.entity */ "./apps/api-gateway/src/modules/billing/payment/entities/payment-type.entity.ts");
const entity_billable_entity_1 = __webpack_require__(/*! ./entity/entity-billable.entity */ "./apps/api-gateway/src/modules/billing/entity-billable/entity/entity-billable.entity.ts");
const entity_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/entity-type.enum */ "./libs/contracts/src/billing/enums/entity-type.enum.ts");
const invoice_entity_1 = __webpack_require__(/*! ../invoice/entities/invoice.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice.entity.ts");
const billable_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/billable-type.enum */ "./libs/contracts/src/billing/enums/billable-type.enum.ts");
let EntityBillableService = class EntityBillableService {
    constructor(billableRepo, paymentTypeRepo, invoiceRepo) {
        this.billableRepo = billableRepo;
        this.paymentTypeRepo = paymentTypeRepo;
        this.invoiceRepo = invoiceRepo;
    }
    async create(dto) {
        const billable = this.billableRepo.create({
            ...dto,
        });
        return this.billableRepo.save(billable);
    }
    async findByEntity(entityId, type) {
        return this.billableRepo.find({
            where: {
                entity_id: entityId,
                entity_type: type,
            },
            relations: ['payment_type'],
        });
    }
    async findInvoicesLinkedToEntity(entity_id, entity_type, billable_type, billable_id) {
        if (entity_type !== entity_type_enum_1.EntityTypeEnum.USER || billable_type !== billable_type_enum_1.BillableTypeEnum.Invoice) {
            throw new common_1.BadRequestException('Unsupported entity_type or billable_type');
        }
        const invoice = await this.invoiceRepo.findOne({
            where: { invoice_id: billable_id },
            relations: ['issued_to'],
        });
        if (!invoice)
            throw new common_1.NotFoundException('Invoice not found');
        if (invoice.issued_to.user_id !== entity_id) {
            throw new common_1.ForbiddenException('Invoice is not linked to the provided entity_id');
        }
        const matchingInvoices = await this.invoiceRepo.find({
            where: {
                issued_to: { user_id: entity_id },
                invoice_id: billable_id,
            },
            relations: ['issued_to', 'items', 'transactions'],
        });
        return matchingInvoices;
    }
    async syncFromInvoice(invoice) {
        const exists = await this.billableRepo.findOne({
            where: {
                billable_id: invoice.invoice_id,
                billable_type: billable_type_enum_1.BillableTypeEnum.Invoice,
            },
        });
        if (exists)
            return;
        await this.billableRepo.save({
            entity_id: invoice.issued_to.user_id,
            entity_type: entity_type_enum_1.EntityTypeEnum.USER,
            billable_id: invoice.invoice_id,
            billable_type: billable_type_enum_1.BillableTypeEnum.Invoice,
            start_period: new Date(),
        });
    }
    async syncFromUpdatedInvoice(invoice) {
        const record = await this.billableRepo.findOne({
            where: {
                billable_id: invoice.invoice_id,
                billable_type: billable_type_enum_1.BillableTypeEnum.Invoice,
            },
        });
        if (!record) {
            return this.syncFromInvoice(invoice);
        }
        record.entity_id = invoice.issued_to.user_id;
        record.entity_type = entity_type_enum_1.EntityTypeEnum.USER;
        await this.billableRepo.save(record);
    }
};
EntityBillableService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entity_billable_entity_1.EntityBillable)),
    __param(1, (0, typeorm_1.InjectRepository)(payment_type_entity_1.PaymentType)),
    __param(2, (0, typeorm_1.InjectRepository)(invoice_entity_1.Invoice)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], EntityBillableService);
exports.EntityBillableService = EntityBillableService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/entity-billable/entity/entity-billable.entity.ts":
/*!***********************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/entity-billable/entity/entity-billable.entity.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityBillable = void 0;
const billable_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/billable-type.enum */ "./libs/contracts/src/billing/enums/billable-type.enum.ts");
const entity_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/entity-type.enum */ "./libs/contracts/src/billing/enums/entity-type.enum.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let EntityBillable = class EntityBillable {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EntityBillable.prototype, "entity_billable_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], EntityBillable.prototype, "entity_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: entity_type_enum_1.EntityTypeEnum }),
    __metadata("design:type", typeof (_a = typeof entity_type_enum_1.EntityTypeEnum !== "undefined" && entity_type_enum_1.EntityTypeEnum) === "function" ? _a : Object)
], EntityBillable.prototype, "entity_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], EntityBillable.prototype, "billable_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: billable_type_enum_1.BillableTypeEnum }),
    __metadata("design:type", typeof (_b = typeof billable_type_enum_1.BillableTypeEnum !== "undefined" && billable_type_enum_1.BillableTypeEnum) === "function" ? _b : Object)
], EntityBillable.prototype, "billable_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], EntityBillable.prototype, "start_period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], EntityBillable.prototype, "end_period", void 0);
EntityBillable = __decorate([
    (0, typeorm_1.Entity)('entity_billable')
], EntityBillable);
exports.EntityBillable = EntityBillable;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/controllers/invoice-item.controller.ts":
/*!*********************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/controllers/invoice-item.controller.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoiceItemController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const invoice_item_service_1 = __webpack_require__(/*! ../services/invoice-item.service */ "./apps/api-gateway/src/modules/billing/invoice/services/invoice-item.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const update_invoice_item_dto_1 = __webpack_require__(/*! ../dto/update-invoice-item.dto */ "./apps/api-gateway/src/modules/billing/invoice/dto/update-invoice-item.dto.ts");
const create_invoice_items_dto_1 = __webpack_require__(/*! ../dto/create-invoice-items.dto */ "./apps/api-gateway/src/modules/billing/invoice/dto/create-invoice-items.dto.ts");
const invoice_items_page_options_dto_1 = __webpack_require__(/*! @lib/contracts/billing/invoice/invoice-items-page-options.dto */ "./libs/contracts/src/billing/invoice/invoice-items-page-options.dto.ts");
let InvoiceItemController = class InvoiceItemController {
    constructor(itemService) {
        this.itemService = itemService;
    }
    create(invoiceId, dto) {
        return this.itemService.addItemsToInvoice(invoiceId, dto);
    }
    findAll(invoiceId, options) {
        return this.itemService.getInvoiceItemsPaginated(invoiceId, options);
    }
    findOne(invoiceId, itemId) {
        return this.itemService.getInvoiceItem(invoiceId, itemId);
    }
    update(invoiceId, itemId, dto) {
        return this.itemService.updateInvoiceItem(invoiceId, itemId, dto);
    }
    remove(itemId, invoiceId) {
        return this.itemService.deleteInvoiceItem(invoiceId, itemId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('invoiceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_invoice_items_dto_1.CreateInvoiceItemsDto !== "undefined" && create_invoice_items_dto_1.CreateInvoiceItemsDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], InvoiceItemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('invoiceId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof invoice_items_page_options_dto_1.InvoiceItemsPageOptionsDto !== "undefined" && invoice_items_page_options_dto_1.InvoiceItemsPageOptionsDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], InvoiceItemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':itemId'),
    __param(0, (0, common_1.Param)('invoiceId')),
    __param(1, (0, common_1.Param)('itemId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], InvoiceItemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':itemId'),
    __param(0, (0, common_1.Param)('invoiceId')),
    __param(1, (0, common_1.Param)('itemId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_d = typeof update_invoice_item_dto_1.UpdateInvoiceItemDto !== "undefined" && update_invoice_item_dto_1.UpdateInvoiceItemDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], InvoiceItemController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':itemId'),
    __param(0, (0, common_1.Param)('itemId')),
    __param(1, (0, common_1.Param)('invoiceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], InvoiceItemController.prototype, "remove", null);
InvoiceItemController = __decorate([
    (0, swagger_1.ApiTags)('Invoice-items'),
    (0, common_1.Controller)('/:invoiceId/items'),
    __metadata("design:paramtypes", [typeof (_a = typeof invoice_item_service_1.InvoiceItemService !== "undefined" && invoice_item_service_1.InvoiceItemService) === "function" ? _a : Object])
], InvoiceItemController);
exports.InvoiceItemController = InvoiceItemController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/controllers/invoice.controller.ts":
/*!****************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/controllers/invoice.controller.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoiceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const invoice_service_1 = __webpack_require__(/*! ../services/invoice.service */ "./apps/api-gateway/src/modules/billing/invoice/services/invoice.service.ts");
const create_invoice_dto_1 = __webpack_require__(/*! ../dto/create-invoice.dto */ "./apps/api-gateway/src/modules/billing/invoice/dto/create-invoice.dto.ts");
const update_invoice_dto_1 = __webpack_require__(/*! ../dto/update-invoice.dto */ "./apps/api-gateway/src/modules/billing/invoice/dto/update-invoice.dto.ts");
const invoice_page_options_dto_1 = __webpack_require__(/*! @lib/contracts/billing/invoice/invoice-page-options.dto */ "./libs/contracts/src/billing/invoice/invoice-page-options.dto.ts");
let InvoiceController = class InvoiceController {
    constructor(invoiceService) {
        this.invoiceService = invoiceService;
    }
    create(dto) {
        return this.invoiceService.createInvoice(dto);
    }
    getInvoices(options) {
        if (options.status) {
            return this.invoiceService.findAllByStatusPaginated(options.status, options);
        }
        return this.invoiceService.findAllPaginated(options);
    }
    findOne(invoiceId) {
        return this.invoiceService.findOne(invoiceId);
    }
    update(invoiceId, dto) {
        return this.invoiceService.updateInvoice(invoiceId, dto);
    }
    delete(invoiceId) {
        return this.invoiceService.delete(invoiceId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_invoice_dto_1.CreateInvoiceDto !== "undefined" && create_invoice_dto_1.CreateInvoiceDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof invoice_page_options_dto_1.InvoicePageOptionsDto !== "undefined" && invoice_page_options_dto_1.InvoicePageOptionsDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoices", null);
__decorate([
    (0, common_1.Get)(':invoiceId'),
    __param(0, (0, common_1.Param)('invoiceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':invoiceId'),
    __param(0, (0, common_1.Param)('invoiceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof update_invoice_dto_1.UpdateInvoiceDto !== "undefined" && update_invoice_dto_1.UpdateInvoiceDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':invoiceId'),
    __param(0, (0, common_1.Param)('invoiceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "delete", null);
InvoiceController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [typeof (_a = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" ? _a : Object])
], InvoiceController);
exports.InvoiceController = InvoiceController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/dto/create-invoice-item.dto.ts":
/*!*************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/dto/create-invoice-item.dto.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateInvoiceItemDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreateInvoiceItemDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity of the item', example: 10, }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateInvoiceItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price of the item', example: 19.99, }),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateInvoiceItemDto.prototype, "unit_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the item', example: 'Premium subscription for one month' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInvoiceItemDto.prototype, "description", void 0);
exports.CreateInvoiceItemDto = CreateInvoiceItemDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/dto/create-invoice-items.dto.ts":
/*!**************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/dto/create-invoice-items.dto.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateInvoiceItemsDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_invoice_item_dto_1 = __webpack_require__(/*! ./create-invoice-item.dto */ "./apps/api-gateway/src/modules/billing/invoice/dto/create-invoice-item.dto.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateInvoiceItemsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [create_invoice_item_dto_1.CreateInvoiceItemDto] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_invoice_item_dto_1.CreateInvoiceItemDto),
    __metadata("design:type", Array)
], CreateInvoiceItemsDto.prototype, "items", void 0);
exports.CreateInvoiceItemsDto = CreateInvoiceItemsDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/dto/create-invoice.dto.ts":
/*!********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/dto/create-invoice.dto.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateInvoiceDto = void 0;
const invoice_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/invoice-type.enum */ "./libs/contracts/src/billing/enums/invoice-type.enum.ts");
const payment_status_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/payment-status.enum */ "./libs/contracts/src/billing/enums/payment-status.enum.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateInvoiceDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID of Invoice Buyer', example: '47849da9-ebd1-4b02-9517-8717791fdd5c' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "issued_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID of Invoice Payer', example: '47849da9-ebd1-4b02-9517-8717791fdd5c' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "issued_to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice Details', example: 'First payment for services' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "invoice_details", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice Amount', example: 150.75 }),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "invoice_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice due date', example: '2023-12-31' }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateInvoiceDto.prototype, "due_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice date paid', example: '2023-12-15' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateInvoiceDto.prototype, "date_paid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice type', example: 'general' }),
    (0, class_validator_1.IsEnum)(invoice_type_enum_1.InvoiceTypeEnum),
    __metadata("design:type", typeof (_c = typeof invoice_type_enum_1.InvoiceTypeEnum !== "undefined" && invoice_type_enum_1.InvoiceTypeEnum) === "function" ? _c : Object)
], CreateInvoiceDto.prototype, "invoice_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice Payment status', example: 'pending' }),
    (0, class_validator_1.IsEnum)(payment_status_enum_1.PaymentStatusEnum),
    __metadata("design:type", typeof (_d = typeof payment_status_enum_1.PaymentStatusEnum !== "undefined" && payment_status_enum_1.PaymentStatusEnum) === "function" ? _d : Object)
], CreateInvoiceDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice items' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateInvoiceDto.prototype, "item_ids", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice transactions' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateInvoiceDto.prototype, "transaction_ids", void 0);
exports.CreateInvoiceDto = CreateInvoiceDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/dto/update-invoice-item.dto.ts":
/*!*************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/dto/update-invoice-item.dto.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateInvoiceItemDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_invoice_item_dto_1 = __webpack_require__(/*! ./create-invoice-item.dto */ "./apps/api-gateway/src/modules/billing/invoice/dto/create-invoice-item.dto.ts");
class UpdateInvoiceItemDto extends (0, mapped_types_1.PartialType)(create_invoice_item_dto_1.CreateInvoiceItemDto) {
}
exports.UpdateInvoiceItemDto = UpdateInvoiceItemDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/dto/update-invoice.dto.ts":
/*!********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/dto/update-invoice.dto.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateInvoiceDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_invoice_dto_1 = __webpack_require__(/*! ./create-invoice.dto */ "./apps/api-gateway/src/modules/billing/invoice/dto/create-invoice.dto.ts");
class UpdateInvoiceDto extends (0, mapped_types_1.PartialType)(create_invoice_dto_1.CreateInvoiceDto) {
}
exports.UpdateInvoiceDto = UpdateInvoiceDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice-item.entity.ts":
/*!**************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/entities/invoice-item.entity.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoiceItem = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const invoice_entity_1 = __webpack_require__(/*! ./invoice.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice.entity.ts");
let InvoiceItem = class InvoiceItem {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InvoiceItem.prototype, "invoice_item_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => invoice_entity_1.Invoice, (invoice) => invoice.items),
    (0, typeorm_1.JoinColumn)({ name: 'invoice_number' }),
    __metadata("design:type", typeof (_a = typeof invoice_entity_1.Invoice !== "undefined" && invoice_entity_1.Invoice) === "function" ? _a : Object)
], InvoiceItem.prototype, "invoice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], InvoiceItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], InvoiceItem.prototype, "unit_price", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], InvoiceItem.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InvoiceItem.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InvoiceItem.prototype, "reference_id", void 0);
InvoiceItem = __decorate([
    (0, typeorm_1.Entity)('invoice_item')
], InvoiceItem);
exports.InvoiceItem = InvoiceItem;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice.entity.ts":
/*!*********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/entities/invoice.entity.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Invoice = void 0;
const invoice_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/invoice-type.enum */ "./libs/contracts/src/billing/enums/invoice-type.enum.ts");
const payment_status_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/payment-status.enum */ "./libs/contracts/src/billing/enums/payment-status.enum.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const invoice_item_entity_1 = __webpack_require__(/*! ./invoice-item.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice-item.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../../../auth/users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
const transaction_entity_1 = __webpack_require__(/*! ../../transaction/entities/transaction.entity */ "./apps/api-gateway/src/modules/billing/transaction/entities/transaction.entity.ts");
let Invoice = class Invoice {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', unique: true }),
    __metadata("design:type", String)
], Invoice.prototype, "invoice_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], Invoice.prototype, "issued_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
    __metadata("design:type", typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object)
], Invoice.prototype, "issued_to", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Invoice.prototype, "invoice_details", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Invoice.prototype, "invoice_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Invoice.prototype, "due_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Invoice.prototype, "date_paid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: invoice_type_enum_1.InvoiceTypeEnum }),
    __metadata("design:type", typeof (_e = typeof invoice_type_enum_1.InvoiceTypeEnum !== "undefined" && invoice_type_enum_1.InvoiceTypeEnum) === "function" ? _e : Object)
], Invoice.prototype, "invoice_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: payment_status_enum_1.PaymentStatusEnum, default: payment_status_enum_1.PaymentStatusEnum.Pending }),
    __metadata("design:type", typeof (_f = typeof payment_status_enum_1.PaymentStatusEnum !== "undefined" && payment_status_enum_1.PaymentStatusEnum) === "function" ? _f : Object)
], Invoice.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => invoice_item_entity_1.InvoiceItem, (item) => item.invoice, { cascade: true }),
    __metadata("design:type", Array)
], Invoice.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_entity_1.Transaction, (transaction) => transaction.invoice),
    __metadata("design:type", Array)
], Invoice.prototype, "transactions", void 0);
Invoice = __decorate([
    (0, typeorm_1.Entity)('invoice')
], Invoice);
exports.Invoice = Invoice;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/invoice.module.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/invoice.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoiceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const invoice_entity_1 = __webpack_require__(/*! ./entities/invoice.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice.entity.ts");
const invoice_item_entity_1 = __webpack_require__(/*! ./entities/invoice-item.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice-item.entity.ts");
const invoice_item_controller_1 = __webpack_require__(/*! ./controllers/invoice-item.controller */ "./apps/api-gateway/src/modules/billing/invoice/controllers/invoice-item.controller.ts");
const invoice_controller_1 = __webpack_require__(/*! ./controllers/invoice.controller */ "./apps/api-gateway/src/modules/billing/invoice/controllers/invoice.controller.ts");
const invoice_item_service_1 = __webpack_require__(/*! ./services/invoice-item.service */ "./apps/api-gateway/src/modules/billing/invoice/services/invoice-item.service.ts");
const invoice_service_1 = __webpack_require__(/*! ./services/invoice.service */ "./apps/api-gateway/src/modules/billing/invoice/services/invoice.service.ts");
const users_module_1 = __webpack_require__(/*! ../../auth/users/users.module */ "./apps/api-gateway/src/modules/auth/users/users.module.ts");
const transaction_module_1 = __webpack_require__(/*! ../transaction/transaction.module */ "./apps/api-gateway/src/modules/billing/transaction/transaction.module.ts");
const entity_billable_module_1 = __webpack_require__(/*! ../entity-billable/entity-billable.module */ "./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.module.ts");
let InvoiceModule = class InvoiceModule {
};
InvoiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([invoice_entity_1.Invoice, invoice_item_entity_1.InvoiceItem]),
            users_module_1.UsersModule,
            (0, common_1.forwardRef)(() => transaction_module_1.TransactionModule),
            entity_billable_module_1.EntityBillableModule,
        ],
        controllers: [invoice_controller_1.InvoiceController, invoice_item_controller_1.InvoiceItemController],
        providers: [invoice_service_1.InvoiceService, invoice_item_service_1.InvoiceItemService],
        exports: [invoice_service_1.InvoiceService]
    })
], InvoiceModule);
exports.InvoiceModule = InvoiceModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/services/invoice-item.service.ts":
/*!***************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/services/invoice-item.service.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoiceItemService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const invoice_item_entity_1 = __webpack_require__(/*! ../entities/invoice-item.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice-item.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const invoice_entity_1 = __webpack_require__(/*! ../entities/invoice.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice.entity.ts");
const paginate_1 = __webpack_require__(/*! @app/common/utils/paginate */ "./apps/common/utils/paginate.ts");
let InvoiceItemService = class InvoiceItemService {
    constructor(invoiceItemRepo, invoiceRepo) {
        this.invoiceItemRepo = invoiceItemRepo;
        this.invoiceRepo = invoiceRepo;
    }
    async addItemsToInvoice(invoiceId, itemsDto) {
        const invoice = await this.invoiceRepo.findOneByOrFail({ invoice_id: invoiceId });
        const items = itemsDto.items.map((dto) => this.invoiceItemRepo.create({
            ...dto,
            invoice,
            total_price: parseFloat((dto.unit_price * dto.quantity).toFixed(2)),
        }));
        const savedItems = await this.invoiceItemRepo.save(items);
        await this.recalculateInvoiceAmount(invoiceId);
        return savedItems;
    }
    async getInvoiceItemsPaginated(invoiceId, pageOptionsDto) {
        const allowedOrderFields = ['total_price', 'quantity'];
        if (!allowedOrderFields.includes(pageOptionsDto.orderBy)) {
            throw new common_1.BadRequestException(`Invalid orderBy: ${pageOptionsDto.orderBy}`);
        }
        return (0, paginate_1.paginate)(this.invoiceItemRepo, pageOptionsDto, {
            where: { invoice: { invoice_id: invoiceId } }
        });
    }
    async getInvoiceItem(invoiceId, itemId) {
        const invoiceItem = await this.invoiceItemRepo.findOne({
            where: { invoice: { invoice_id: invoiceId }, invoice_item_id: itemId },
        });
        if (!invoiceItem) {
            throw new common_1.NotFoundException('Invoice item not found or does not belong to the specified invoice');
        }
        return invoiceItem;
    }
    async updateInvoiceItem(invoiceId, itemId, dto) {
        const item = await this.invoiceItemRepo.findOne({
            where: { invoice: { invoice_id: invoiceId }, invoice_item_id: itemId },
        });
        if (!item) {
            throw new common_1.NotFoundException('Invoice item not found or does not belong to the specified invoice');
        }
        Object.assign(item, dto);
        if (dto.unit_price || dto.quantity) {
            item.total_price = (dto.unit_price ?? item.unit_price) * (dto.quantity ?? item.quantity);
        }
        const updatedItem = await this.invoiceItemRepo.save(item);
        await this.recalculateInvoiceAmount(invoiceId);
        return updatedItem;
    }
    async deleteInvoiceItem(invoiceId, itemId) {
        const item = await this.invoiceItemRepo.findOne({
            where: { invoice: { invoice_id: invoiceId }, invoice_item_id: itemId },
        });
        if (!item) {
            throw new common_1.NotFoundException('Invoice item not found or does not belong to the specified invoice');
        }
        await this.invoiceItemRepo.delete(itemId);
        await this.recalculateInvoiceAmount(invoiceId);
    }
    async recalculateInvoiceAmount(invoiceId) {
        const items = await this.invoiceItemRepo.find({
            where: { invoice: { invoice_id: invoiceId } },
        });
        const total = items.reduce((sum, item) => sum + Number(item.total_price), 0);
        await this.invoiceRepo.update({ invoice_id: invoiceId }, { invoice_amount: total });
    }
};
InvoiceItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(invoice_item_entity_1.InvoiceItem)),
    __param(1, (0, typeorm_1.InjectRepository)(invoice_entity_1.Invoice)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], InvoiceItemService);
exports.InvoiceItemService = InvoiceItemService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/invoice/services/invoice.service.ts":
/*!**********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/invoice/services/invoice.service.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoiceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const invoice_entity_1 = __webpack_require__(/*! ../entities/invoice.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice.entity.ts");
const invoice_item_entity_1 = __webpack_require__(/*! ../entities/invoice-item.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice-item.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../../../auth/users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
const transaction_entity_1 = __webpack_require__(/*! ../../transaction/entities/transaction.entity */ "./apps/api-gateway/src/modules/billing/transaction/entities/transaction.entity.ts");
const invoice_id_utils_1 = __webpack_require__(/*! ../../utils/invoice-id.utils */ "./apps/api-gateway/src/modules/billing/utils/invoice-id.utils.ts");
const paginate_1 = __webpack_require__(/*! @app/common/utils/paginate */ "./apps/common/utils/paginate.ts");
const entity_billable_service_1 = __webpack_require__(/*! ../../entity-billable/entity-billable.service */ "./apps/api-gateway/src/modules/billing/entity-billable/entity-billable.service.ts");
let InvoiceService = class InvoiceService {
    constructor(invoiceRepo, userRepo, invoiceItemRepo, transRepo, entityBillableService) {
        this.invoiceRepo = invoiceRepo;
        this.userRepo = userRepo;
        this.invoiceItemRepo = invoiceItemRepo;
        this.transRepo = transRepo;
        this.entityBillableService = entityBillableService;
    }
    async createInvoice(dto) {
        const issuedByUser = await this.userRepo.findOneOrFail({ where: { user_id: dto.issued_by } });
        const issuedToUser = await this.userRepo.findOneOrFail({ where: { user_id: dto.issued_to } });
        const items = dto.item_ids
            ? await this.invoiceItemRepo.findBy({ invoice_item_id: (0, typeorm_1.In)(dto.item_ids) })
            : [];
        const transactions = dto.transaction_ids
            ? await this.transRepo.findBy({ transaction_id: (0, typeorm_1.In)(dto.transaction_ids) })
            : [];
        const invoice = this.invoiceRepo.create({
            invoice_id: (0, invoice_id_utils_1.generateInvoiceId)(),
            invoice_details: dto.invoice_details,
            invoice_amount: dto.invoice_amount,
            due_date: dto.due_date,
            date_paid: dto.date_paid,
            invoice_type: dto.invoice_type,
            status: dto.status,
            issued_by: issuedByUser,
            issued_to: issuedToUser,
            items,
            transactions,
        });
        const savedInvoice = await this.invoiceRepo.save(invoice);
        await this.entityBillableService.syncFromInvoice(savedInvoice);
        return savedInvoice;
    }
    async findOne(invoiceId) {
        return this.invoiceRepo.findOneOrFail({
            where: { invoice_id: invoiceId },
            relations: ['items', 'transactions']
        });
    }
    async findAllPaginated(pageOptionsDto) {
        return (0, paginate_1.paginate)(this.invoiceRepo, pageOptionsDto, {
            relations: ['items', 'transactions'],
        });
    }
    async findAllByStatusPaginated(status, pageOptionsDto) {
        const allowedOrderFields = ['date_paid', 'invoice_amount', 'due_date', 'status'];
        if (!allowedOrderFields.includes(pageOptionsDto.orderBy)) {
            throw new common_1.BadRequestException(`Invalid orderBy: ${pageOptionsDto.orderBy}`);
        }
        return (0, paginate_1.paginate)(this.invoiceRepo, pageOptionsDto, {
            where: { status },
            relations: ['items', 'transactions'],
        });
    }
    async updateInvoice(invoiceId, dto) {
        let issuedByUser = undefined;
        if (dto.issued_by) {
            issuedByUser = await this.userRepo.findOneOrFail({ where: { user_id: dto.issued_by } });
        }
        let issuedToUser = undefined;
        if (dto.issued_to) {
            issuedToUser = await this.userRepo.findOneOrFail({ where: { user_id: dto.issued_to } });
        }
        let items = undefined, transactions = undefined;
        if (dto.item_ids) {
            items = await this.invoiceItemRepo.findBy({ invoice_item_id: (0, typeorm_1.In)(dto.item_ids) });
        }
        if (dto.transaction_ids) {
            transactions = await this.transRepo.findBy({ transaction_id: (0, typeorm_1.In)(dto.transaction_ids) });
        }
        const updateData = {
            ...dto,
            issued_by: issuedByUser,
            issued_to: issuedToUser,
            ...(items ? { items } : {}),
            ...(transactions ? { transactions } : {}),
        };
        await this.invoiceRepo.update({ invoice_id: invoiceId }, updateData);
        const updatedInvoice = await this.findOne(invoiceId);
        await this.entityBillableService.syncFromUpdatedInvoice(updatedInvoice);
        return updatedInvoice;
    }
    async updateStatusAndDatePaid(invoiceId, status, datePaid) {
        await this.invoiceRepo.update({ invoice_id: invoiceId }, { status,
            date_paid: datePaid });
        return this.findOne(invoiceId);
    }
    async delete(invoiceId) {
        await this.invoiceRepo.delete({ invoice_id: invoiceId });
    }
};
InvoiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(invoice_entity_1.Invoice)),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_2.InjectRepository)(invoice_item_entity_1.InvoiceItem)),
    __param(3, (0, typeorm_2.InjectRepository)(transaction_entity_1.Transaction)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _d : Object, typeof (_e = typeof entity_billable_service_1.EntityBillableService !== "undefined" && entity_billable_service_1.EntityBillableService) === "function" ? _e : Object])
], InvoiceService);
exports.InvoiceService = InvoiceService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/controllers/payment-channel.controller.ts":
/*!************************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/controllers/payment-channel.controller.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentChannelController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const payment_channel_service_1 = __webpack_require__(/*! ../services/payment-channel.service */ "./apps/api-gateway/src/modules/billing/payment/services/payment-channel.service.ts");
const create_payment_channel_dto_1 = __webpack_require__(/*! ../dto/create-payment-channel.dto */ "./apps/api-gateway/src/modules/billing/payment/dto/create-payment-channel.dto.ts");
const update_payment_channel_dto_1 = __webpack_require__(/*! ../dto/update-payment-channel.dto */ "./apps/api-gateway/src/modules/billing/payment/dto/update-payment-channel.dto.ts");
let PaymentChannelController = class PaymentChannelController {
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(paymentChannelId) {
        return this.service.findOne(paymentChannelId);
    }
    update(paymentChannelId, dto) {
        return this.service.update(paymentChannelId, dto);
    }
    remove(paymentChannelId) {
        return this.service.remove(paymentChannelId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_payment_channel_dto_1.CreatePaymentChannelDto !== "undefined" && create_payment_channel_dto_1.CreatePaymentChannelDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PaymentChannelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentChannelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':paymentChannelId'),
    __param(0, (0, common_1.Param)('paymentChannelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentChannelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':paymentChannelId'),
    __param(0, (0, common_1.Param)('paymentChannelId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof update_payment_channel_dto_1.UpdatePaymentChannelDto !== "undefined" && update_payment_channel_dto_1.UpdatePaymentChannelDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], PaymentChannelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':paymentChannelId'),
    __param(0, (0, common_1.Param)('paymentChannelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentChannelController.prototype, "remove", null);
PaymentChannelController = __decorate([
    (0, swagger_1.ApiTags)('Payment Channel'),
    (0, common_1.Controller)('payment-channel'),
    __metadata("design:paramtypes", [typeof (_a = typeof payment_channel_service_1.PaymentChannelService !== "undefined" && payment_channel_service_1.PaymentChannelService) === "function" ? _a : Object])
], PaymentChannelController);
exports.PaymentChannelController = PaymentChannelController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/controllers/payment-type.controller.ts":
/*!*********************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/controllers/payment-type.controller.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentTypeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const payment_type_service_1 = __webpack_require__(/*! ../services/payment-type.service */ "./apps/api-gateway/src/modules/billing/payment/services/payment-type.service.ts");
const create_payment_type_dto_1 = __webpack_require__(/*! ../dto/create-payment-type.dto */ "./apps/api-gateway/src/modules/billing/payment/dto/create-payment-type.dto.ts");
const update_payment_type_dto_1 = __webpack_require__(/*! ../dto/update-payment-type.dto */ "./apps/api-gateway/src/modules/billing/payment/dto/update-payment-type.dto.ts");
let PaymentTypeController = class PaymentTypeController {
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(paymentTypeId) {
        return this.service.findOne(paymentTypeId);
    }
    update(paymentTypeId, dto) {
        return this.service.update(paymentTypeId, dto);
    }
    remove(paymentTypeId) {
        return this.service.remove(paymentTypeId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_payment_type_dto_1.CreatePaymentTypeDto !== "undefined" && create_payment_type_dto_1.CreatePaymentTypeDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PaymentTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':paymentTypeId'),
    __param(0, (0, common_1.Param)('paymentTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':paymentTypeId'),
    __param(0, (0, common_1.Param)('paymentTypeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof update_payment_type_dto_1.UpdatePaymentTypeDto !== "undefined" && update_payment_type_dto_1.UpdatePaymentTypeDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], PaymentTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':paymentTypeId'),
    __param(0, (0, common_1.Param)('paymentTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentTypeController.prototype, "remove", null);
PaymentTypeController = __decorate([
    (0, swagger_1.ApiTags)('Payment Type'),
    (0, common_1.Controller)('payment-type'),
    __metadata("design:paramtypes", [typeof (_a = typeof payment_type_service_1.PaymentTypeService !== "undefined" && payment_type_service_1.PaymentTypeService) === "function" ? _a : Object])
], PaymentTypeController);
exports.PaymentTypeController = PaymentTypeController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/controllers/payment.controller.ts":
/*!****************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/controllers/payment.controller.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const payment_service_1 = __webpack_require__(/*! ../services/payment.service */ "./apps/api-gateway/src/modules/billing/payment/services/payment.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const initialize_payment_dto_1 = __webpack_require__(/*! @lib/contracts/billing/payment/initialize-payment.dto */ "./libs/contracts/src/billing/payment/initialize-payment.dto.ts");
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async intializePaymet(dto) {
        return this.paymentService.intializePayment(dto);
    }
    async handlePaystackcallback(reference) {
        return this.paymentService.verifyPayment(reference);
    }
};
__decorate([
    (0, common_1.Post)('initialize'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof initialize_payment_dto_1.InitializePaymentDto !== "undefined" && initialize_payment_dto_1.InitializePaymentDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "intializePaymet", null);
__decorate([
    (0, common_1.Get)('paystack/callback'),
    __param(0, (0, common_1.Query)('reference')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "handlePaystackcallback", null);
PaymentController = __decorate([
    (0, swagger_1.ApiTags)('Payment Paystack'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof payment_service_1.PaymentService !== "undefined" && payment_service_1.PaymentService) === "function" ? _a : Object])
], PaymentController);
exports.PaymentController = PaymentController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/dto/create-payment-channel.dto.ts":
/*!****************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/dto/create-payment-channel.dto.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePaymentChannelDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreatePaymentChannelDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the payment channel', example: 'MTN ' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentChannelDto.prototype, "payment_channel_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'A brief description of the payment channel', example: 'Payment through MTN Mobile Money', }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentChannelDto.prototype, "payment_channel_description", void 0);
exports.CreatePaymentChannelDto = CreatePaymentChannelDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/dto/create-payment-type.dto.ts":
/*!*************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/dto/create-payment-type.dto.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePaymentTypeDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreatePaymentTypeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the payment type', example: 'CREDIT_CARD' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentTypeDto.prototype, "payment_type_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'A brief description of the payment type', example: 'Payment made using a credit card', }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentTypeDto.prototype, "payment_type_description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'The number of partitions for the payment', example: 3 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePaymentTypeDto.prototype, "payment_partitions", void 0);
exports.CreatePaymentTypeDto = CreatePaymentTypeDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/dto/update-payment-channel.dto.ts":
/*!****************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/dto/update-payment-channel.dto.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePaymentChannelDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_payment_channel_dto_1 = __webpack_require__(/*! ./create-payment-channel.dto */ "./apps/api-gateway/src/modules/billing/payment/dto/create-payment-channel.dto.ts");
class UpdatePaymentChannelDto extends (0, mapped_types_1.PartialType)(create_payment_channel_dto_1.CreatePaymentChannelDto) {
}
exports.UpdatePaymentChannelDto = UpdatePaymentChannelDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/dto/update-payment-type.dto.ts":
/*!*************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/dto/update-payment-type.dto.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePaymentTypeDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_payment_type_dto_1 = __webpack_require__(/*! ./create-payment-type.dto */ "./apps/api-gateway/src/modules/billing/payment/dto/create-payment-type.dto.ts");
class UpdatePaymentTypeDto extends (0, mapped_types_1.PartialType)(create_payment_type_dto_1.CreatePaymentTypeDto) {
}
exports.UpdatePaymentTypeDto = UpdatePaymentTypeDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/entities/payment-channel.entity.ts":
/*!*****************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/entities/payment-channel.entity.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentChannel = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let PaymentChannel = class PaymentChannel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaymentChannel.prototype, "payment_channel_id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], PaymentChannel.prototype, "payment_channel_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PaymentChannel.prototype, "payment_channel_description", void 0);
PaymentChannel = __decorate([
    (0, typeorm_1.Entity)('payment_channel')
], PaymentChannel);
exports.PaymentChannel = PaymentChannel;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/entities/payment-type.entity.ts":
/*!**************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/entities/payment-type.entity.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentType = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let PaymentType = class PaymentType {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaymentType.prototype, "payment_type_id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], PaymentType.prototype, "payment_type_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PaymentType.prototype, "payment_type_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PaymentType.prototype, "payment_partitions", void 0);
PaymentType = __decorate([
    (0, typeorm_1.Entity)('payment_type')
], PaymentType);
exports.PaymentType = PaymentType;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/payment.module.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/payment.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const payment_controller_1 = __webpack_require__(/*! ./controllers/payment.controller */ "./apps/api-gateway/src/modules/billing/payment/controllers/payment.controller.ts");
const payment_service_1 = __webpack_require__(/*! ./services/payment.service */ "./apps/api-gateway/src/modules/billing/payment/services/payment.service.ts");
const payment_type_entity_1 = __webpack_require__(/*! ./entities/payment-type.entity */ "./apps/api-gateway/src/modules/billing/payment/entities/payment-type.entity.ts");
const payment_type_controller_1 = __webpack_require__(/*! ./controllers/payment-type.controller */ "./apps/api-gateway/src/modules/billing/payment/controllers/payment-type.controller.ts");
const payment_type_service_1 = __webpack_require__(/*! ./services/payment-type.service */ "./apps/api-gateway/src/modules/billing/payment/services/payment-type.service.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const transaction_module_1 = __webpack_require__(/*! ../transaction/transaction.module */ "./apps/api-gateway/src/modules/billing/transaction/transaction.module.ts");
const invoice_module_1 = __webpack_require__(/*! ../invoice/invoice.module */ "./apps/api-gateway/src/modules/billing/invoice/invoice.module.ts");
const payment_channel_controller_1 = __webpack_require__(/*! ./controllers/payment-channel.controller */ "./apps/api-gateway/src/modules/billing/payment/controllers/payment-channel.controller.ts");
const payment_channel_service_1 = __webpack_require__(/*! ./services/payment-channel.service */ "./apps/api-gateway/src/modules/billing/payment/services/payment-channel.service.ts");
const payment_channel_entity_1 = __webpack_require__(/*! ./entities/payment-channel.entity */ "./apps/api-gateway/src/modules/billing/payment/entities/payment-channel.entity.ts");
let PaymentModule = class PaymentModule {
};
PaymentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([payment_type_entity_1.PaymentType, payment_channel_entity_1.PaymentChannel]),
            axios_1.HttpModule,
            (0, common_1.forwardRef)(() => transaction_module_1.TransactionModule),
            (0, common_1.forwardRef)(() => invoice_module_1.InvoiceModule),
        ],
        controllers: [payment_controller_1.PaymentController, payment_type_controller_1.PaymentTypeController, payment_channel_controller_1.PaymentChannelController],
        providers: [
            payment_service_1.PaymentService,
            payment_type_service_1.PaymentTypeService,
            payment_channel_service_1.PaymentChannelService,
            config_1.ConfigService,
        ],
        exports: [payment_service_1.PaymentService, payment_type_service_1.PaymentTypeService, payment_channel_service_1.PaymentChannelService, typeorm_1.TypeOrmModule]
    })
], PaymentModule);
exports.PaymentModule = PaymentModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/services/payment-channel.service.ts":
/*!******************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/services/payment-channel.service.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentChannelService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const payment_channel_entity_1 = __webpack_require__(/*! ../entities/payment-channel.entity */ "./apps/api-gateway/src/modules/billing/payment/entities/payment-channel.entity.ts");
let PaymentChannelService = class PaymentChannelService {
    constructor(paymentChannelRepo) {
        this.paymentChannelRepo = paymentChannelRepo;
    }
    create(dto) {
        return this.paymentChannelRepo.save(dto);
    }
    findAll() {
        return this.paymentChannelRepo.find();
    }
    findOne(paymentChannelId) {
        const paymentChannel = this.paymentChannelRepo.findOneByOrFail({ payment_channel_id: paymentChannelId });
        if (!paymentChannel)
            throw new common_1.NotFoundException("Payment Channel not found");
        return paymentChannel;
    }
    update(paymentChannelId, dto) {
        return this.paymentChannelRepo.update(paymentChannelId, dto);
    }
    async findOrCreateByName(payment_channel_name) {
        let paymentChannel = await this.paymentChannelRepo.findOne({ where: { payment_channel_name } });
        if (!paymentChannel) {
            paymentChannel = this.paymentChannelRepo.create({ payment_channel_name });
            await this.paymentChannelRepo.save(paymentChannel);
        }
        return paymentChannel;
    }
    remove(paymentChannelId) {
        return this.paymentChannelRepo.delete(paymentChannelId);
    }
};
PaymentChannelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_channel_entity_1.PaymentChannel)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PaymentChannelService);
exports.PaymentChannelService = PaymentChannelService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/services/payment-type.service.ts":
/*!***************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/services/payment-type.service.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentTypeService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const payment_type_entity_1 = __webpack_require__(/*! ../entities/payment-type.entity */ "./apps/api-gateway/src/modules/billing/payment/entities/payment-type.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let PaymentTypeService = class PaymentTypeService {
    constructor(paymentTypeRepo) {
        this.paymentTypeRepo = paymentTypeRepo;
    }
    create(dto) {
        return this.paymentTypeRepo.save(dto);
    }
    findAll() {
        return this.paymentTypeRepo.find();
    }
    findOne(paymentTypeId) {
        const paymentType = this.paymentTypeRepo.findOneByOrFail({ payment_type_id: paymentTypeId });
        if (!paymentType)
            throw new common_1.NotFoundException("Payment Type not found");
        return paymentType;
    }
    update(paymentTypeId, dto) {
        return this.paymentTypeRepo.update(paymentTypeId, dto);
    }
    async findOrCreateByName(payment_type_name) {
        let paymentType = await this.paymentTypeRepo.findOne({ where: { payment_type_name } });
        if (!paymentType) {
            paymentType = this.paymentTypeRepo.create({ payment_type_name });
            await this.paymentTypeRepo.save(paymentType);
        }
        return paymentType;
    }
    remove(paymentTypeId) {
        return this.paymentTypeRepo.delete(paymentTypeId);
    }
};
PaymentTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_type_entity_1.PaymentType)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PaymentTypeService);
exports.PaymentTypeService = PaymentTypeService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/payment/services/payment.service.ts":
/*!**********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/payment/services/payment.service.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const transaction_service_1 = __webpack_require__(/*! ../../transaction/services/transaction.service */ "./apps/api-gateway/src/modules/billing/transaction/services/transaction.service.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const payment_status_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/payment-status.enum */ "./libs/contracts/src/billing/enums/payment-status.enum.ts");
const payment_type_service_1 = __webpack_require__(/*! ./payment-type.service */ "./apps/api-gateway/src/modules/billing/payment/services/payment-type.service.ts");
const invoice_service_1 = __webpack_require__(/*! ../../invoice/services/invoice.service */ "./apps/api-gateway/src/modules/billing/invoice/services/invoice.service.ts");
const transaction_type_service_1 = __webpack_require__(/*! ../../transaction/services/transaction-type.service */ "./apps/api-gateway/src/modules/billing/transaction/services/transaction-type.service.ts");
const transaction_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/transaction-type.enum */ "./libs/contracts/src/billing/enums/transaction-type.enum.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const transaction_id_utils_1 = __webpack_require__(/*! ../../utils/transaction-id.utils */ "./apps/api-gateway/src/modules/billing/utils/transaction-id.utils.ts");
const payment_channel_service_1 = __webpack_require__(/*! ./payment-channel.service */ "./apps/api-gateway/src/modules/billing/payment/services/payment-channel.service.ts");
let PaymentService = class PaymentService {
    constructor(httpService, transactionService, paymentTypeService, paymentChannelService, invoiceService, transactionTypeService, configService) {
        this.httpService = httpService;
        this.transactionService = transactionService;
        this.paymentTypeService = paymentTypeService;
        this.paymentChannelService = paymentChannelService;
        this.invoiceService = invoiceService;
        this.transactionTypeService = transactionTypeService;
        this.configService = configService;
    }
    async intializePayment(dto) {
        const invoice = await this.invoiceService.findOne(dto.invoiceId);
        if (invoice.status == payment_status_enum_1.PaymentStatusEnum.Paid || invoice.date_paid) {
            throw new common_1.BadRequestException('This invoice has already been paid.');
        }
        const transactionType = await this.transactionTypeService.findOneByName(transaction_type_enum_1.TransactionTypeEnum.Debit);
        const paystackPayload = {
            email: invoice.issued_to.email,
            amount: invoice.invoice_amount * 100,
        };
        const headers = {
            Authorization: `Bearer ${this.configService.get('PAYSTACK_SECRET_KEY')}`,
        };
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post('https://api.paystack.co/transaction/initialize', paystackPayload, { headers }));
        const paystackData = response.data.data;
        const transaction = await this.transactionService.create({
            transaction_id: (0, transaction_id_utils_1.generateTransactionId)(),
            payment_type: null,
            payment_channel: null,
            transaction_date: new Date(),
            transaction_details: null,
            transaction_type: transactionType,
            invoice: invoice,
            transaction_amount: invoice.invoice_amount,
            transaction_status: payment_status_enum_1.PaymentStatusEnum.Pending,
            reference_number: paystackData.reference,
        });
        return {
            status: 'success',
            authorization_url: paystackData.authorization_url,
            transaction_id: transaction.transaction_id,
            reference: paystackData.reference,
        };
    }
    async verifyPayment(reference) {
        const headers = {
            Authorization: `Bearer ${this.configService.get('PAYSTACK_SECRET_KEY')}`,
        };
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`https://api.paystack.co/transaction/verify/${reference}`, { headers }));
            const paystackData = response.data.data;
            if (!paystackData)
                throw new Error("Invalid response from Paystack");
            const transPaymentType = paystackData.authorization?.channel?.toLowerCase() || 'unknown';
            const transPaymentChannel = paystackData.authorization?.brand || 'unknown';
            const paymentType = await this.paymentTypeService.findOrCreateByName(transPaymentType);
            const paymentChannel = await this.paymentChannelService.findOrCreateByName(transPaymentChannel);
            if (paystackData.status === 'success') {
                const transaction = await this.transactionService.updateWithPaymentInfo(reference, {
                    status: payment_status_enum_1.PaymentStatusEnum.Paid,
                    payment_type: paymentType,
                    payment_channel: paymentChannel,
                });
                if (!transaction.invoice) {
                    throw new Error('Transaction is not linked to an invoice.');
                }
                if (paystackData.paid_at) {
                    await this.invoiceService.updateStatusAndDatePaid(transaction.invoice.invoice_id, payment_status_enum_1.PaymentStatusEnum.Paid, new Date(paystackData.paid_at));
                }
                return {
                    success: true,
                    message: 'Payment Successful',
                    paystackData,
                };
            }
            await this.transactionService.updateWithPaymentInfo(reference, {
                status: payment_status_enum_1.PaymentStatusEnum.Unpaid,
                payment_type: paymentType,
                payment_channel: paymentChannel,
            });
            return {
                success: false,
                message: 'Payment Failed or Not Completed',
                paystackData,
            };
        }
        catch (error) {
            console.log(error.message);
            throw new Error(`Paystack verification error: ${error?.response?.data?.message || error.message || 'Unknown error'}`);
        }
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof transaction_service_1.TransactionService !== "undefined" && transaction_service_1.TransactionService) === "function" ? _b : Object, typeof (_c = typeof payment_type_service_1.PaymentTypeService !== "undefined" && payment_type_service_1.PaymentTypeService) === "function" ? _c : Object, typeof (_d = typeof payment_channel_service_1.PaymentChannelService !== "undefined" && payment_channel_service_1.PaymentChannelService) === "function" ? _d : Object, typeof (_e = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" ? _e : Object, typeof (_f = typeof transaction_type_service_1.TransactionTypeService !== "undefined" && transaction_type_service_1.TransactionTypeService) === "function" ? _f : Object, typeof (_g = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _g : Object])
], PaymentService);
exports.PaymentService = PaymentService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/transaction/controllers/transaction-type.controller.ts":
/*!*****************************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/transaction/controllers/transaction-type.controller.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionTypeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const transaction_type_service_1 = __webpack_require__(/*! ../services/transaction-type.service */ "./apps/api-gateway/src/modules/billing/transaction/services/transaction-type.service.ts");
const create_transaction_type_dto_1 = __webpack_require__(/*! @lib/contracts/billing/transaction/create-transaction-type.dto */ "./libs/contracts/src/billing/transaction/create-transaction-type.dto.ts");
let TransactionTypeController = class TransactionTypeController {
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(transTypeid) {
        return this.service.findOne(transTypeid);
    }
    update(transTypeid, dto) {
        return this.service.update(transTypeid, dto);
    }
    remove(transTypeid) {
        return this.service.remove(transTypeid);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_transaction_type_dto_1.CreateTransactionTypeDto !== "undefined" && create_transaction_type_dto_1.CreateTransactionTypeDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TransactionTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':transTypeid'),
    __param(0, (0, common_1.Param)('transTypeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':transTypeid'),
    __param(0, (0, common_1.Param)('transTypeid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof create_transaction_type_dto_1.CreateTransactionTypeDto !== "undefined" && create_transaction_type_dto_1.CreateTransactionTypeDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TransactionTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':transTypeid'),
    __param(0, (0, common_1.Param)('transTypeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionTypeController.prototype, "remove", null);
TransactionTypeController = __decorate([
    (0, swagger_1.ApiTags)('Transaction Type'),
    (0, common_1.Controller)('transaction-type'),
    __metadata("design:paramtypes", [typeof (_a = typeof transaction_type_service_1.TransactionTypeService !== "undefined" && transaction_type_service_1.TransactionTypeService) === "function" ? _a : Object])
], TransactionTypeController);
exports.TransactionTypeController = TransactionTypeController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/transaction/controllers/transaction.controller.ts":
/*!************************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/transaction/controllers/transaction.controller.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const transaction_service_1 = __webpack_require__(/*! ../services/transaction.service */ "./apps/api-gateway/src/modules/billing/transaction/services/transaction.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const transaction_page_options_dto_1 = __webpack_require__(/*! @lib/contracts/billing/transaction/transaction-page-options.dto */ "./libs/contracts/src/billing/transaction/transaction-page-options.dto.ts");
let TransactionController = class TransactionController {
    constructor(transService) {
        this.transService = transService;
    }
    getTransactions(options) {
        if (options.status) {
            return this.transService.findAllByStatusPaginated(options.status, options);
        }
        return this.transService.findAllPaginated(options);
    }
    findOne(transId) {
        return this.transService.findOne(transId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof transaction_page_options_dto_1.TransactionPageOptionsDto !== "undefined" && transaction_page_options_dto_1.TransactionPageOptionsDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getTransactions", null);
__decorate([
    (0, common_1.Get)(':transId'),
    __param(0, (0, common_1.Param)('transId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "findOne", null);
TransactionController = __decorate([
    (0, swagger_1.ApiTags)('Transactions'),
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [typeof (_a = typeof transaction_service_1.TransactionService !== "undefined" && transaction_service_1.TransactionService) === "function" ? _a : Object])
], TransactionController);
exports.TransactionController = TransactionController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/transaction/entities/transaction-type.entity.ts":
/*!**********************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/transaction/entities/transaction-type.entity.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionType = void 0;
const transaction_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/transaction-type.enum */ "./libs/contracts/src/billing/enums/transaction-type.enum.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let TransactionType = class TransactionType {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TransactionType.prototype, "transaction_type_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: transaction_type_enum_1.TransactionTypeEnum }),
    __metadata("design:type", typeof (_a = typeof transaction_type_enum_1.TransactionTypeEnum !== "undefined" && transaction_type_enum_1.TransactionTypeEnum) === "function" ? _a : Object)
], TransactionType.prototype, "transaction_type_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 128 }),
    __metadata("design:type", String)
], TransactionType.prototype, "transaction_type_description", void 0);
TransactionType = __decorate([
    (0, typeorm_1.Entity)('transaction_type')
], TransactionType);
exports.TransactionType = TransactionType;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/transaction/entities/transaction.entity.ts":
/*!*****************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/transaction/entities/transaction.entity.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transaction = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const payment_type_entity_1 = __webpack_require__(/*! ../../payment/entities/payment-type.entity */ "./apps/api-gateway/src/modules/billing/payment/entities/payment-type.entity.ts");
const payment_status_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/payment-status.enum */ "./libs/contracts/src/billing/enums/payment-status.enum.ts");
const transaction_type_entity_1 = __webpack_require__(/*! ./transaction-type.entity */ "./apps/api-gateway/src/modules/billing/transaction/entities/transaction-type.entity.ts");
const invoice_entity_1 = __webpack_require__(/*! ../../invoice/entities/invoice.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice.entity.ts");
const payment_channel_entity_1 = __webpack_require__(/*! ../../payment/entities/payment-channel.entity */ "./apps/api-gateway/src/modules/billing/payment/entities/payment-channel.entity.ts");
let Transaction = class Transaction {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Transaction.prototype, "transaction_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => payment_type_entity_1.PaymentType, { nullable: true, eager: true }),
    __metadata("design:type", typeof (_a = typeof payment_type_entity_1.PaymentType !== "undefined" && payment_type_entity_1.PaymentType) === "function" ? _a : Object)
], Transaction.prototype, "payment_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => payment_channel_entity_1.PaymentChannel, { nullable: true, eager: true }),
    __metadata("design:type", typeof (_b = typeof payment_channel_entity_1.PaymentChannel !== "undefined" && payment_channel_entity_1.PaymentChannel) === "function" ? _b : Object)
], Transaction.prototype, "payment_channel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Transaction.prototype, "transaction_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "transaction_details", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => transaction_type_entity_1.TransactionType),
    __metadata("design:type", typeof (_d = typeof transaction_type_entity_1.TransactionType !== "undefined" && transaction_type_entity_1.TransactionType) === "function" ? _d : Object)
], Transaction.prototype, "transaction_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => invoice_entity_1.Invoice, (invoice) => invoice.transactions),
    __metadata("design:type", typeof (_e = typeof invoice_entity_1.Invoice !== "undefined" && invoice_entity_1.Invoice) === "function" ? _e : Object)
], Transaction.prototype, "invoice", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Transaction.prototype, "transaction_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: payment_status_enum_1.PaymentStatusEnum }),
    __metadata("design:type", typeof (_f = typeof payment_status_enum_1.PaymentStatusEnum !== "undefined" && payment_status_enum_1.PaymentStatusEnum) === "function" ? _f : Object)
], Transaction.prototype, "transaction_status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Transaction.prototype, "reference_number", void 0);
Transaction = __decorate([
    (0, typeorm_1.Entity)('transaction')
], Transaction);
exports.Transaction = Transaction;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/transaction/services/transaction-type.service.ts":
/*!***********************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/transaction/services/transaction-type.service.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionTypeService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const transaction_type_entity_1 = __webpack_require__(/*! ../entities/transaction-type.entity */ "./apps/api-gateway/src/modules/billing/transaction/entities/transaction-type.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let TransactionTypeService = class TransactionTypeService {
    constructor(transTypeRepo) {
        this.transTypeRepo = transTypeRepo;
    }
    async create(dto) {
        const transactionType = this.transTypeRepo.create(dto);
        return this.transTypeRepo.save(transactionType);
    }
    async findAll() {
        return this.transTypeRepo.find();
    }
    async findOne(transTypeid) {
        const transactionType = await this.transTypeRepo.findOneBy({ transaction_type_id: transTypeid });
        if (!transactionType) {
            throw new common_1.NotFoundException('Transaction type not found');
        }
        return transactionType;
    }
    async findOneByName(name) {
        const transactionType = await this.transTypeRepo.findOneBy({ transaction_type_name: name });
        if (!transactionType) {
            throw new common_1.NotFoundException(`Transaction type '${name}' not found`);
        }
        return transactionType;
    }
    async update(transTypeid, dto) {
        const transactionType = await this.findOne(transTypeid);
        Object.assign(transactionType, dto);
        return this.transTypeRepo.save(transactionType);
    }
    async remove(transTypeid) {
        const transactionType = await this.findOne(transTypeid);
        await this.transTypeRepo.remove(transactionType);
    }
};
TransactionTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_type_entity_1.TransactionType)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TransactionTypeService);
exports.TransactionTypeService = TransactionTypeService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/transaction/services/transaction.service.ts":
/*!******************************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/transaction/services/transaction.service.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const transaction_entity_1 = __webpack_require__(/*! ../entities/transaction.entity */ "./apps/api-gateway/src/modules/billing/transaction/entities/transaction.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const payment_type_entity_1 = __webpack_require__(/*! ../../payment/entities/payment-type.entity */ "./apps/api-gateway/src/modules/billing/payment/entities/payment-type.entity.ts");
const transaction_type_entity_1 = __webpack_require__(/*! ../entities/transaction-type.entity */ "./apps/api-gateway/src/modules/billing/transaction/entities/transaction-type.entity.ts");
const invoice_entity_1 = __webpack_require__(/*! ../../invoice/entities/invoice.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice.entity.ts");
const transaction_id_utils_1 = __webpack_require__(/*! ../../utils/transaction-id.utils */ "./apps/api-gateway/src/modules/billing/utils/transaction-id.utils.ts");
const paginate_1 = __webpack_require__(/*! @app/common/utils/paginate */ "./apps/common/utils/paginate.ts");
let TransactionService = class TransactionService {
    constructor(transRepo, paymentTypeRepo, transTypeRepo, invoiceRepo) {
        this.transRepo = transRepo;
        this.paymentTypeRepo = paymentTypeRepo;
        this.transTypeRepo = transTypeRepo;
        this.invoiceRepo = invoiceRepo;
    }
    async create(dto) {
        let paymentType = null;
        if (dto.payment_type?.payment_type_id) {
            paymentType = await this.paymentTypeRepo.findOneByOrFail({ payment_type_id: dto.payment_type.payment_type_id });
        }
        const transType = await this.transTypeRepo.findOneByOrFail({ transaction_type_id: dto.transaction_type.transaction_type_id });
        const invoice = await this.invoiceRepo.findOneByOrFail({ invoice_id: dto.invoice.invoice_id });
        const transaction = this.transRepo.create({
            transaction_id: (0, transaction_id_utils_1.generateTransactionId)(),
            transaction_date: new Date(dto.transaction_date),
            transaction_details: dto.transaction_details,
            transaction_amount: dto.transaction_amount,
            transaction_status: dto.transaction_status,
            reference_number: dto.reference_number,
            invoice,
            payment_type: paymentType,
            transaction_type: transType,
        });
        return this.transRepo.save(transaction);
    }
    async findAllPaginated(pageOptionsDto) {
        return (0, paginate_1.paginate)(this.transRepo, pageOptionsDto, {
            relations: ['invoice', 'payment_type', 'transaction_type']
        });
    }
    async findAllByStatusPaginated(status, pageOptionsDto) {
        const allowedOrderFields = ['transaction_date', 'transaction_amount', 'transaction_status'];
        if (!allowedOrderFields.includes(pageOptionsDto.orderBy)) {
            throw new common_1.BadRequestException(`Invalid orderBy: ${pageOptionsDto.orderBy}`);
        }
        return (0, paginate_1.paginate)(this.transRepo, pageOptionsDto, {
            where: { transaction_status: status },
            relations: ['invoice', 'payment_type', 'transaction_type']
        });
    }
    async findOne(transId) {
        return this.transRepo.findOne({
            where: { transaction_id: transId },
            relations: ['invoice', 'payment_type', 'transaction_type'],
        });
    }
    async findOneByReference(reference_number) {
        const transaction = await this.transRepo.findOneBy({ reference_number: reference_number });
        if (!transaction) {
            throw new common_1.NotFoundException(`Transaction not found`);
        }
        return transaction;
    }
    async update(transId, updateDto) {
        const transaction = await this.transRepo.findOne({ where: { transaction_id: transId }, relations: ['invoice', 'payment_type', 'transaction_type'] });
        if (!transaction) {
            throw new Error('Transaction not found');
        }
        if (updateDto.transaction_date)
            transaction.transaction_date = new Date(updateDto.transaction_date);
        if (updateDto.transaction_details)
            transaction.transaction_details = updateDto.transaction_details;
        if (updateDto.transaction_amount)
            transaction.transaction_amount = updateDto.transaction_amount;
        if (updateDto.transaction_status)
            transaction.transaction_status = updateDto.transaction_status;
        if (updateDto.reference_number)
            transaction.reference_number = updateDto.reference_number;
        if (updateDto.transaction_type.transaction_type_id) {
            const transType = await this.transTypeRepo.findOne({ where: { transaction_type_id: updateDto.transaction_type.transaction_type_id } });
            if (transType)
                transaction.transaction_type = transType;
        }
        if (updateDto.invoice.invoice_id) {
            const invoice = await this.invoiceRepo.findOne({ where: { invoice_id: updateDto.invoice.invoice_id } });
            if (invoice)
                transaction.invoice = invoice;
        }
        if (updateDto.payment_type.payment_type_id) {
            const paymentType = await this.paymentTypeRepo.findOne({ where: { payment_type_id: updateDto.payment_type.payment_type_id } });
            if (paymentType)
                transaction.payment_type = paymentType;
        }
        return this.transRepo.save(transaction);
    }
    async updateStatusByReference(reference, status) {
        const transaction = await this.findOneByReference(reference);
        transaction.transaction_status = status;
        return this.transRepo.save(transaction);
    }
    async updateWithPaymentInfo(reference, updateData) {
        const transaction = await this.transRepo.findOneOrFail({ where: { reference_number: reference }, relations: ['invoice'], });
        transaction.transaction_status = updateData.status;
        transaction.payment_type = updateData.payment_type;
        transaction.payment_channel = updateData.payment_channel;
        return this.transRepo.save(transaction);
    }
    async delete(transId) {
        await this.transRepo.delete(transId);
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction)),
    __param(1, (0, typeorm_1.InjectRepository)(payment_type_entity_1.PaymentType)),
    __param(2, (0, typeorm_1.InjectRepository)(transaction_type_entity_1.TransactionType)),
    __param(3, (0, typeorm_1.InjectRepository)(invoice_entity_1.Invoice)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object])
], TransactionService);
exports.TransactionService = TransactionService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/transaction/transaction.module.ts":
/*!********************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/transaction/transaction.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionModule = void 0;
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const transaction_controller_1 = __webpack_require__(/*! ./controllers/transaction.controller */ "./apps/api-gateway/src/modules/billing/transaction/controllers/transaction.controller.ts");
const transaction_service_1 = __webpack_require__(/*! ./services/transaction.service */ "./apps/api-gateway/src/modules/billing/transaction/services/transaction.service.ts");
const transaction_type_entity_1 = __webpack_require__(/*! ./entities/transaction-type.entity */ "./apps/api-gateway/src/modules/billing/transaction/entities/transaction-type.entity.ts");
const transaction_entity_1 = __webpack_require__(/*! ./entities/transaction.entity */ "./apps/api-gateway/src/modules/billing/transaction/entities/transaction.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const transaction_type_controller_1 = __webpack_require__(/*! ./controllers/transaction-type.controller */ "./apps/api-gateway/src/modules/billing/transaction/controllers/transaction-type.controller.ts");
const transaction_type_service_1 = __webpack_require__(/*! ./services/transaction-type.service */ "./apps/api-gateway/src/modules/billing/transaction/services/transaction-type.service.ts");
const invoice_entity_1 = __webpack_require__(/*! ../invoice/entities/invoice.entity */ "./apps/api-gateway/src/modules/billing/invoice/entities/invoice.entity.ts");
const payment_module_1 = __webpack_require__(/*! ../payment/payment.module */ "./apps/api-gateway/src/modules/billing/payment/payment.module.ts");
const invoice_module_1 = __webpack_require__(/*! ../invoice/invoice.module */ "./apps/api-gateway/src/modules/billing/invoice/invoice.module.ts");
let TransactionModule = class TransactionModule {
};
TransactionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([transaction_type_entity_1.TransactionType, transaction_entity_1.Transaction, invoice_entity_1.Invoice]),
            (0, common_1.forwardRef)(() => payment_module_1.PaymentModule),
            (0, common_1.forwardRef)(() => invoice_module_1.InvoiceModule)
        ],
        controllers: [transaction_controller_1.TransactionController, transaction_type_controller_1.TransactionTypeController],
        providers: [transaction_service_1.TransactionService, transaction_type_service_1.TransactionTypeService],
        exports: [transaction_service_1.TransactionService, transaction_type_service_1.TransactionTypeService, typeorm_1.TypeOrmModule]
    })
], TransactionModule);
exports.TransactionModule = TransactionModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/utils/invoice-id.utils.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/utils/invoice-id.utils.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateInvoiceId = void 0;
function generateInvoiceId() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    const millisecond = String(now.getMilliseconds()).padStart(4, '0');
    return `INV-${year}${month}${day}${hour}${minute}${second}${millisecond}`;
}
exports.generateInvoiceId = generateInvoiceId;


/***/ }),

/***/ "./apps/api-gateway/src/modules/billing/utils/transaction-id.utils.ts":
/*!****************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/billing/utils/transaction-id.utils.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateTransactionId = void 0;
function generateTransactionId() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    const millisecond = String(now.getMilliseconds()).padStart(4, '0');
    return `${year}${month}${day}${hour}${minute}${second}${millisecond}`;
}
exports.generateTransactionId = generateTransactionId;


/***/ }),

/***/ "./apps/api-gateway/src/modules/messaging/mail/mail.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/messaging/mail/mail.controller.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mail_service_1 = __webpack_require__(/*! ./mail.service */ "./apps/api-gateway/src/modules/messaging/mail/mail.service.ts");
const contracts_1 = __webpack_require__(/*! @lib/contracts */ "./libs/contracts/src/index.ts");
let MailController = class MailController {
    constructor(mailService) {
        this.mailService = mailService;
    }
    sendResetPassword(body) {
        return this.mailService.sendPasswordResetMail(body);
    }
    sendVerification(body) {
        return this.mailService.sendVerificationMail(body);
    }
    sendWelcome(body) {
        return this.mailService.sendWelcomeMail(body);
    }
    sendOnboarding(body) {
        return this.mailService.sendOnboardingMail(body);
    }
    sendQrCode(body) {
        return this.mailService.sendQrCodeMail(body.data, body.recipient, body.subject);
    }
};
__decorate([
    (0, common_1.Post)("send-reset-password"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof contracts_1.ResetPasswordMailDto !== "undefined" && contracts_1.ResetPasswordMailDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], MailController.prototype, "sendResetPassword", null);
__decorate([
    (0, common_1.Post)("send-verification"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof contracts_1.ConfirmMailDto !== "undefined" && contracts_1.ConfirmMailDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], MailController.prototype, "sendVerification", null);
__decorate([
    (0, common_1.Post)("send-welcome"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof contracts_1.WelcomeMailDto !== "undefined" && contracts_1.WelcomeMailDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], MailController.prototype, "sendWelcome", null);
__decorate([
    (0, common_1.Post)("send-onboarding"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof contracts_1.OnboardingMailDto !== "undefined" && contracts_1.OnboardingMailDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], MailController.prototype, "sendOnboarding", null);
__decorate([
    (0, common_1.Post)("send-qr"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], MailController.prototype, "sendQrCode", null);
MailController = __decorate([
    (0, common_1.Controller)("mail"),
    __metadata("design:paramtypes", [typeof (_a = typeof mail_service_1.MailService !== "undefined" && mail_service_1.MailService) === "function" ? _a : Object])
], MailController);
exports.MailController = MailController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/messaging/mail/mail.module.ts":
/*!********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/messaging/mail/mail.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const handlebars_adapter_1 = __webpack_require__(/*! @nestjs-modules/mailer/dist/adapters/handlebars.adapter */ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const mail_service_1 = __webpack_require__(/*! ./mail.service */ "./apps/api-gateway/src/modules/messaging/mail/mail.service.ts");
const mail_controller_1 = __webpack_require__(/*! ./mail.controller */ "./apps/api-gateway/src/modules/messaging/mail/mail.controller.ts");
let MailModule = class MailModule {
};
MailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    transport: {
                        host: configService.get('MAIL_HOST'),
                        port: configService.get('MAIL_PORT'),
                        secure: configService.get('MAIL_SECURE'),
                        auth: {
                            user: configService.get('MAIL_USER'),
                            pass: configService.get('MAIL_PASSWORD'),
                        },
                    },
                    defaults: {
                        from: `"No Reply" <${configService.get('MAIL_FROM')}>`,
                    },
                    template: {
                        dir: __dirname + '../../../../../apps/templates',
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: false
                        },
                    },
                }),
            }),
        ],
        controllers: [mail_controller_1.MailController],
        providers: [mail_service_1.MailService],
        exports: [mail_service_1.MailService]
    })
], MailModule);
exports.MailModule = MailModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/messaging/mail/mail.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/messaging/mail/mail.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendMail(template, variables, recipient, subject) {
        try {
            await this.mailerService.sendMail({
                to: recipient,
                subject: subject,
                template: template,
                context: variables
            });
        }
        catch (error) {
            throw new Error(`Failed to send email ${error.message}`);
        }
    }
    async sendPasswordResetMail(variables) {
        return this.sendMail("./passwordReset.html", variables, variables.email, "Password Reset Email");
    }
    async sendVerificationMail(variables) {
        return this.sendMail("./confirmEmail.html", variables, variables.email, "User Verification Email");
    }
    async sendQrCodeMail(variables, recipient, subject) {
        return this.sendMail("./onboardingCompleted.html", variables, recipient, subject);
    }
    async sendWelcomeMail(variables) {
        return this.sendMail("./welcome.html", variables, variables.email, "Welcome Email");
    }
    async sendOnboardingMail(variables) {
        return this.sendMail("./welcome.html", variables, variables.email, "Onboarding Email");
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object])
], MailService);
exports.MailService = MailService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/resources/dto/create-media.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/resources/dto/create-media.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMediaDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const media_type_enum_1 = __webpack_require__(/*! @lib/contracts/resources/enums/media-type.enum */ "./libs/contracts/src/resources/enums/media-type.enum.ts");
const document_type_enum_1 = __webpack_require__(/*! @lib/contracts/resources/enums/document-type.enum */ "./libs/contracts/src/resources/enums/document-type.enum.ts");
const user_dto_1 = __webpack_require__(/*! ../../auth/users/dto/user.dto */ "./apps/api-gateway/src/modules/auth/users/dto/user.dto.ts");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const user_entity_1 = __webpack_require__(/*! ../../auth/users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
class CreateMediaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Media name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Short media description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL to the uploaded media' }),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "content_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: media_type_enum_1.MediaTypeEnum, description: 'Media file type (e.g., IMAGE, PDF)' }),
    (0, class_validator_1.IsEnum)(media_type_enum_1.MediaTypeEnum),
    __metadata("design:type", typeof (_a = typeof media_type_enum_1.MediaTypeEnum !== "undefined" && media_type_enum_1.MediaTypeEnum) === "function" ? _a : Object)
], CreateMediaDto.prototype, "media_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Alias for the media file (e.g., document type)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "media_alias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Entity ID the media is related to (e.g., job_request.id)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "entity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: document_type_enum_1.DocumentEntityTypeEnum, description: 'Entity type (e.g., JOB_REQUEST, SERVICE)' }),
    (0, class_validator_1.IsEnum)(document_type_enum_1.DocumentEntityTypeEnum),
    __metadata("design:type", typeof (_b = typeof document_type_enum_1.DocumentEntityTypeEnum !== "undefined" && document_type_enum_1.DocumentEntityTypeEnum) === "function" ? _b : Object)
], CreateMediaDto.prototype, "entity_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the user who uploaded the media', type: [user_dto_1.UserDto] }),
    (0, class_transformer_1.Type)(() => user_dto_1.UserDto),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], CreateMediaDto.prototype, "uploaded_by", void 0);
exports.CreateMediaDto = CreateMediaDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/resources/dto/update-media.dto.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/resources/dto/update-media.dto.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMediaDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_media_dto_1 = __webpack_require__(/*! ./create-media.dto */ "./apps/api-gateway/src/modules/resources/dto/create-media.dto.ts");
class UpdateMediaDto extends (0, mapped_types_1.PartialType)(create_media_dto_1.CreateMediaDto) {
}
exports.UpdateMediaDto = UpdateMediaDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/resources/entities/media.entity.ts":
/*!*************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/resources/entities/media.entity.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Media = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../auth/users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
const document_type_enum_1 = __webpack_require__(/*! @lib/contracts/resources/enums/document-type.enum */ "./libs/contracts/src/resources/enums/document-type.enum.ts");
const media_type_enum_1 = __webpack_require__(/*! @lib/contracts/resources/enums/media-type.enum */ "./libs/contracts/src/resources/enums/media-type.enum.ts");
let Media = class Media {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Media.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Media.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150, nullable: true }),
    __metadata("design:type", String)
], Media.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Media.prototype, "content_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: media_type_enum_1.MediaTypeEnum }),
    __metadata("design:type", typeof (_a = typeof media_type_enum_1.MediaTypeEnum !== "undefined" && media_type_enum_1.MediaTypeEnum) === "function" ? _a : Object)
], Media.prototype, "media_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true }),
    __metadata("design:type", String)
], Media.prototype, "media_alias", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Media.prototype, "entity_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: document_type_enum_1.DocumentEntityTypeEnum }),
    __metadata("design:type", typeof (_b = typeof document_type_enum_1.DocumentEntityTypeEnum !== "undefined" && document_type_enum_1.DocumentEntityTypeEnum) === "function" ? _b : Object)
], Media.prototype, "entity_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.media),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], Media.prototype, "uploaded_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Media.prototype, "uploaded_at", void 0);
Media = __decorate([
    (0, typeorm_1.Entity)('media')
], Media);
exports.Media = Media;


/***/ }),

/***/ "./apps/api-gateway/src/modules/resources/resources.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/resources/resources.controller.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourcesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const resources_service_1 = __webpack_require__(/*! ./resources.service */ "./apps/api-gateway/src/modules/resources/resources.service.ts");
const create_media_dto_1 = __webpack_require__(/*! ./dto/create-media.dto */ "./apps/api-gateway/src/modules/resources/dto/create-media.dto.ts");
const update_media_dto_1 = __webpack_require__(/*! ./dto/update-media.dto */ "./apps/api-gateway/src/modules/resources/dto/update-media.dto.ts");
let ResourcesController = class ResourcesController {
    constructor(resourcesService) {
        this.resourcesService = resourcesService;
    }
    async createMedia(createMediaDto) {
        return this.resourcesService.createMedia(createMediaDto);
    }
    async findAllMedia() {
        return this.resourcesService.findAllMedia();
    }
    async findOneMedia(mediaId) {
        return this.resourcesService.findOneMedia(mediaId);
    }
    async updateMedia(mediaId, updateDto) {
        return this.resourcesService.updateMedia(mediaId, updateDto);
    }
    async removeMedia(mediaId) {
        return this.resourcesService.removeMedia(mediaId);
    }
};
__decorate([
    (0, common_1.Post)('media'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_media_dto_1.CreateMediaDto !== "undefined" && create_media_dto_1.CreateMediaDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ResourcesController.prototype, "createMedia", null);
__decorate([
    (0, common_1.Get)('media'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ResourcesController.prototype, "findAllMedia", null);
__decorate([
    (0, common_1.Get)('media/:mediaId'),
    __param(0, (0, common_1.Param)('mediaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ResourcesController.prototype, "findOneMedia", null);
__decorate([
    (0, common_1.Patch)('media/:mediaId'),
    __param(0, (0, common_1.Param)('mediaId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof update_media_dto_1.UpdateMediaDto !== "undefined" && update_media_dto_1.UpdateMediaDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ResourcesController.prototype, "updateMedia", null);
__decorate([
    (0, common_1.Delete)('media/:mediaId'),
    __param(0, (0, common_1.Param)('mediaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ResourcesController.prototype, "removeMedia", null);
ResourcesController = __decorate([
    (0, common_1.Controller)('resources'),
    __metadata("design:paramtypes", [typeof (_a = typeof resources_service_1.ResourcesService !== "undefined" && resources_service_1.ResourcesService) === "function" ? _a : Object])
], ResourcesController);
exports.ResourcesController = ResourcesController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/resources/resources.module.ts":
/*!********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/resources/resources.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourcesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const resources_controller_1 = __webpack_require__(/*! ./resources.controller */ "./apps/api-gateway/src/modules/resources/resources.controller.ts");
const resources_service_1 = __webpack_require__(/*! ./resources.service */ "./apps/api-gateway/src/modules/resources/resources.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const media_entity_1 = __webpack_require__(/*! ./entities/media.entity */ "./apps/api-gateway/src/modules/resources/entities/media.entity.ts");
let ResourcesModule = class ResourcesModule {
};
ResourcesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([media_entity_1.Media])],
        controllers: [resources_controller_1.ResourcesController],
        providers: [resources_service_1.ResourcesService]
    })
], ResourcesModule);
exports.ResourcesModule = ResourcesModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/resources/resources.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/resources/resources.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourcesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const media_entity_1 = __webpack_require__(/*! ./entities/media.entity */ "./apps/api-gateway/src/modules/resources/entities/media.entity.ts");
let ResourcesService = class ResourcesService {
    constructor(mediaRepository) {
        this.mediaRepository = mediaRepository;
    }
    async createMedia(dto) {
        const media = this.mediaRepository.create(dto);
        return this.mediaRepository.save(media);
    }
    async findAllMedia() {
        return this.mediaRepository.find({ relations: ['uploaded_by'] });
    }
    async findOneMedia(id) {
        const media = await this.mediaRepository.findOne({ where: { id }, relations: ['uploaded_by'] });
        if (!media)
            throw new common_1.NotFoundException('Media not found');
        return media;
    }
    async updateMedia(id, updateDto) {
        const media = await this.mediaRepository.findOne({ where: { id }, relations: ['uploaded_by'] });
        if (!media)
            throw new common_1.NotFoundException('Media not found');
        const updated = this.mediaRepository.merge(media, updateDto);
        return this.mediaRepository.save(updated);
    }
    async removeMedia(id) {
        const media = await this.mediaRepository.findOne({ where: { id }, relations: ['uploaded_by'] });
        if (!media)
            throw new common_1.NotFoundException('Media not found');
        await this.mediaRepository.delete(media);
    }
};
ResourcesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(media_entity_1.Media)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ResourcesService);
exports.ResourcesService = ResourcesService;


/***/ }),

/***/ "./apps/api-gateway/src/modules/ticketing/dto/create-ticket.dto.ts":
/*!*************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/ticketing/dto/create-ticket.dto.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTicketDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const category_enum_1 = __webpack_require__(/*! @lib/contracts/ticketing/enums/category.enum */ "./libs/contracts/src/ticketing/enums/category.enum.ts");
const site_type_enum_1 = __webpack_require__(/*! @lib/contracts/ticketing/enums/site-type.enum */ "./libs/contracts/src/ticketing/enums/site-type.enum.ts");
const priority_enum_1 = __webpack_require__(/*! @lib/contracts/ticketing/enums/priority.enum */ "./libs/contracts/src/ticketing/enums/priority.enum.ts");
const request_type_enum_1 = __webpack_require__(/*! @lib/contracts/ticketing/enums/request-type.enum */ "./libs/contracts/src/ticketing/enums/request-type.enum.ts");
const status_enum_1 = __webpack_require__(/*! @lib/contracts/ticketing/enums/status.enum */ "./libs/contracts/src/ticketing/enums/status.enum.ts");
const user_dto_1 = __webpack_require__(/*! ../../auth/users/dto/user.dto */ "./apps/api-gateway/src/modules/auth/users/dto/user.dto.ts");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const user_entity_1 = __webpack_require__(/*! ../../auth/users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
class CreateTicketDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CS2345678', description: 'Unique case number' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^CS\d{7}$/, { message: 'case_number must match format CS followed by 7 digits' }),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "case_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Organization name', example: 'Access Bank' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "organization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Location', example: 'Tema Main ' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: category_enum_1.TicketCategoryEnum, default: category_enum_1.TicketCategoryEnum.GRG }),
    (0, class_validator_1.IsEnum)(category_enum_1.TicketCategoryEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof category_enum_1.TicketCategoryEnum !== "undefined" && category_enum_1.TicketCategoryEnum) === "function" ? _a : Object)
], CreateTicketDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ticket description', example: 'SetUp Problem' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ticket code', example: 'ERR_388' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: site_type_enum_1.TicketSiteTypeEnum, default: site_type_enum_1.TicketSiteTypeEnum.BRANCH }),
    (0, class_validator_1.IsEnum)(site_type_enum_1.TicketSiteTypeEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof site_type_enum_1.TicketSiteTypeEnum !== "undefined" && site_type_enum_1.TicketSiteTypeEnum) === "function" ? _b : Object)
], CreateTicketDto.prototype, "site_type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: priority_enum_1.TicketPriorityEnum, default: priority_enum_1.TicketPriorityEnum.LOW }),
    (0, class_validator_1.IsEnum)(priority_enum_1.TicketPriorityEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof priority_enum_1.TicketPriorityEnum !== "undefined" && priority_enum_1.TicketPriorityEnum) === "function" ? _c : Object)
], CreateTicketDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact name', example: 'Ama Aidoo' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "contact_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact phone number', example: '+233 667927892' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "contact_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of requester', example: 'Kwame Kakari' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "requester_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email of requester', example: 'kwamek@abc.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "requester_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Assigned user', type: [user_dto_1.UserDto] }),
    (0, class_transformer_1.Type)(() => user_dto_1.UserDto),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object)
], CreateTicketDto.prototype, "assigned_to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: request_type_enum_1.TicketRequestTypeEnum }),
    (0, class_validator_1.IsEnum)(request_type_enum_1.TicketRequestTypeEnum),
    __metadata("design:type", typeof (_e = typeof request_type_enum_1.TicketRequestTypeEnum !== "undefined" && request_type_enum_1.TicketRequestTypeEnum) === "function" ? _e : Object)
], CreateTicketDto.prototype, "request_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: status_enum_1.TicketStatusEnum }),
    (0, class_validator_1.IsEnum)(status_enum_1.TicketStatusEnum),
    __metadata("design:type", typeof (_f = typeof status_enum_1.TicketStatusEnum !== "undefined" && status_enum_1.TicketStatusEnum) === "function" ? _f : Object)
], CreateTicketDto.prototype, "status", void 0);
exports.CreateTicketDto = CreateTicketDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/ticketing/dto/update-ticket.dto.ts":
/*!*************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/ticketing/dto/update-ticket.dto.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateTicketDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_ticket_dto_1 = __webpack_require__(/*! ./create-ticket.dto */ "./apps/api-gateway/src/modules/ticketing/dto/create-ticket.dto.ts");
class UpdateTicketDto extends (0, swagger_1.PartialType)(create_ticket_dto_1.CreateTicketDto) {
}
exports.UpdateTicketDto = UpdateTicketDto;


/***/ }),

/***/ "./apps/api-gateway/src/modules/ticketing/entities/ticket.entity.ts":
/*!**************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/ticketing/entities/ticket.entity.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ticket = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const category_enum_1 = __webpack_require__(/*! @lib/contracts/ticketing/enums/category.enum */ "./libs/contracts/src/ticketing/enums/category.enum.ts");
const priority_enum_1 = __webpack_require__(/*! @lib/contracts/ticketing/enums/priority.enum */ "./libs/contracts/src/ticketing/enums/priority.enum.ts");
const site_type_enum_1 = __webpack_require__(/*! @lib/contracts/ticketing/enums/site-type.enum */ "./libs/contracts/src/ticketing/enums/site-type.enum.ts");
const request_type_enum_1 = __webpack_require__(/*! @lib/contracts/ticketing/enums/request-type.enum */ "./libs/contracts/src/ticketing/enums/request-type.enum.ts");
const status_enum_1 = __webpack_require__(/*! @lib/contracts/ticketing/enums/status.enum */ "./libs/contracts/src/ticketing/enums/status.enum.ts");
const user_entity_1 = __webpack_require__(/*! ../../auth/users/entities/user.entity */ "./apps/api-gateway/src/modules/auth/users/entities/user.entity.ts");
let Ticket = class Ticket {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Ticket.prototype, "case_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128 }),
    __metadata("design:type", String)
], Ticket.prototype, "organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128 }),
    __metadata("design:type", String)
], Ticket.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: category_enum_1.TicketCategoryEnum,
        default: category_enum_1.TicketCategoryEnum.GRG,
    }),
    __metadata("design:type", typeof (_a = typeof category_enum_1.TicketCategoryEnum !== "undefined" && category_enum_1.TicketCategoryEnum) === "function" ? _a : Object)
], Ticket.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 128 }),
    __metadata("design:type", String)
], Ticket.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Ticket.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: site_type_enum_1.TicketSiteTypeEnum,
        default: site_type_enum_1.TicketSiteTypeEnum.BRANCH,
    }),
    __metadata("design:type", typeof (_b = typeof site_type_enum_1.TicketSiteTypeEnum !== "undefined" && site_type_enum_1.TicketSiteTypeEnum) === "function" ? _b : Object)
], Ticket.prototype, "site_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: priority_enum_1.TicketPriorityEnum,
        default: priority_enum_1.TicketPriorityEnum.LOW,
    }),
    __metadata("design:type", typeof (_c = typeof priority_enum_1.TicketPriorityEnum !== "undefined" && priority_enum_1.TicketPriorityEnum) === "function" ? _c : Object)
], Ticket.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 80 }),
    __metadata("design:type", String)
], Ticket.prototype, "contact_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 80 }),
    __metadata("design:type", String)
], Ticket.prototype, "contact_phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ticket.prototype, "requester_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ticket.prototype, "requester_email", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'assigned_to' }),
    __metadata("design:type", typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object)
], Ticket.prototype, "assigned_to", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: request_type_enum_1.TicketRequestTypeEnum,
    }),
    __metadata("design:type", typeof (_e = typeof request_type_enum_1.TicketRequestTypeEnum !== "undefined" && request_type_enum_1.TicketRequestTypeEnum) === "function" ? _e : Object)
], Ticket.prototype, "request_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: status_enum_1.TicketStatusEnum,
    }),
    __metadata("design:type", typeof (_f = typeof status_enum_1.TicketStatusEnum !== "undefined" && status_enum_1.TicketStatusEnum) === "function" ? _f : Object)
], Ticket.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], Ticket.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_h = typeof Date !== "undefined" && Date) === "function" ? _h : Object)
], Ticket.prototype, "updated_at", void 0);
Ticket = __decorate([
    (0, typeorm_1.Entity)('tickets')
], Ticket);
exports.Ticket = Ticket;


/***/ }),

/***/ "./apps/api-gateway/src/modules/ticketing/ticketing.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/api-gateway/src/modules/ticketing/ticketing.controller.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketingController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const ticketing_service_1 = __webpack_require__(/*! ./ticketing.service */ "./apps/api-gateway/src/modules/ticketing/ticketing.service.ts");
const create_ticket_dto_1 = __webpack_require__(/*! ./dto/create-ticket.dto */ "./apps/api-gateway/src/modules/ticketing/dto/create-ticket.dto.ts");
const update_ticket_dto_1 = __webpack_require__(/*! ./dto/update-ticket.dto */ "./apps/api-gateway/src/modules/ticketing/dto/update-ticket.dto.ts");
let TicketingController = class TicketingController {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    create(dto) {
        return this.ticketService.create(dto);
    }
    getAllTickets() {
        return this.ticketService.findAll();
    }
    getOneTicket(caseNumber) {
        return this.ticketService.findOne(caseNumber);
    }
    updateTicket(caseNumber, dto) {
        return this.ticketService.update(caseNumber, dto);
    }
    deleteTicket(caseNumber) {
        return this.ticketService.remove(caseNumber);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_ticket_dto_1.CreateTicketDto !== "undefined" && create_ticket_dto_1.CreateTicketDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TicketingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TicketingController.prototype, "getAllTickets", null);
__decorate([
    (0, common_1.Get)(':caseNumber'),
    __param(0, (0, common_1.Param)('caseNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TicketingController.prototype, "getOneTicket", null);
__decorate([
    (0, common_1.Patch)(':caseNumber'),
    __param(0, (0, common_1.Param)('caseNumber')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_ticket_dto_1.UpdateTicketDto !== "undefined" && update_ticket_dto_1.UpdateTicketDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TicketingController.prototype, "updateTicket", null);
__decorate([
    (0, common_1.Delete)(':caseNumber'),
    __param(0, (0, common_1.Param)('caseNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TicketingController.prototype, "deleteTicket", null);
TicketingController = __decorate([
    (0, common_1.Controller)('tickets'),
    __metadata("design:paramtypes", [typeof (_a = typeof ticketing_service_1.TicketingService !== "undefined" && ticketing_service_1.TicketingService) === "function" ? _a : Object])
], TicketingController);
exports.TicketingController = TicketingController;


/***/ }),

/***/ "./apps/api-gateway/src/modules/ticketing/ticketing.module.ts":
/*!********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/ticketing/ticketing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketingModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const ticketing_controller_1 = __webpack_require__(/*! ./ticketing.controller */ "./apps/api-gateway/src/modules/ticketing/ticketing.controller.ts");
const ticketing_service_1 = __webpack_require__(/*! ./ticketing.service */ "./apps/api-gateway/src/modules/ticketing/ticketing.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const ticket_entity_1 = __webpack_require__(/*! ./entities/ticket.entity */ "./apps/api-gateway/src/modules/ticketing/entities/ticket.entity.ts");
let TicketingModule = class TicketingModule {
};
TicketingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ticket_entity_1.Ticket])],
        controllers: [ticketing_controller_1.TicketingController],
        providers: [ticketing_service_1.TicketingService]
    })
], TicketingModule);
exports.TicketingModule = TicketingModule;


/***/ }),

/***/ "./apps/api-gateway/src/modules/ticketing/ticketing.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/api-gateway/src/modules/ticketing/ticketing.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketingService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const ticket_entity_1 = __webpack_require__(/*! ./entities/ticket.entity */ "./apps/api-gateway/src/modules/ticketing/entities/ticket.entity.ts");
let TicketingService = class TicketingService {
    constructor(ticketRepo) {
        this.ticketRepo = ticketRepo;
    }
    async create(createTicketDto) {
        const ticket = this.ticketRepo.create(createTicketDto);
        return this.ticketRepo.save(ticket);
    }
    async findAll() {
        return this.ticketRepo.find();
    }
    async findOne(case_number) {
        const ticket = await this.ticketRepo.findOneBy({ case_number });
        if (!ticket)
            throw new common_1.NotFoundException('Ticket not found');
        return ticket;
    }
    async update(case_number, updateDto) {
        const ticket = await this.findOne(case_number);
        const updated = this.ticketRepo.merge(ticket, updateDto);
        return this.ticketRepo.save(updated);
    }
    async remove(case_number) {
        const ticket = await this.findOne(case_number);
        await this.ticketRepo.remove(ticket);
    }
};
TicketingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TicketingService);
exports.TicketingService = TicketingService;


/***/ }),

/***/ "./apps/common/config/client-config.module.ts":
/*!****************************************************!*\
  !*** ./apps/common/config/client-config.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientConfigModule = void 0;
const joi = __importStar(__webpack_require__(/*! joi */ "joi"));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const client_config_service_1 = __webpack_require__(/*! ./client-config.service */ "./apps/common/config/client-config.service.ts");
let ClientConfigModule = class ClientConfigModule {
};
ClientConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: false,
                validationSchema: joi.object().pattern(/^([A-Z_]+_CLIENT_PORT)$/, joi.number().default(3000)),
            }),
        ],
        providers: [client_config_service_1.ClientConfigService],
        exports: [client_config_service_1.ClientConfigService],
    })
], ClientConfigModule);
exports.ClientConfigModule = ClientConfigModule;


/***/ }),

/***/ "./apps/common/config/client-config.service.ts":
/*!*****************************************************!*\
  !*** ./apps/common/config/client-config.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientConfigService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const client_ports_provider_1 = __webpack_require__(/*! ./client-ports.provider */ "./apps/common/config/client-ports.provider.ts");
const client_options_provider_1 = __webpack_require__(/*! ./client-options.provider */ "./apps/common/config/client-options.provider.ts");
let ClientConfigService = class ClientConfigService {
    constructor(config) {
        this.portsProvider = new client_ports_provider_1.ClientPortsProvider(config);
        this.optionsProvider = new client_options_provider_1.ClientOptionsProvider(this.portsProvider);
    }
    getClientOptions(serviceName) {
        const port = this.portsProvider.getClientPort(serviceName);
        return this.optionsProvider.createClientOptions(port);
    }
};
ClientConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], ClientConfigService);
exports.ClientConfigService = ClientConfigService;


/***/ }),

/***/ "./apps/common/config/client-options.provider.ts":
/*!*******************************************************!*\
  !*** ./apps/common/config/client-options.provider.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientOptionsProvider = void 0;
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
class ClientOptionsProvider {
    constructor(portsProvider) {
        this.portsProvider = portsProvider;
    }
    createClientOptions(port) {
        return {
            transport: microservices_1.Transport.TCP,
            options: {
                host: '127.0.0.1',
                port,
            },
        };
    }
}
exports.ClientOptionsProvider = ClientOptionsProvider;


/***/ }),

/***/ "./apps/common/config/client-ports.provider.ts":
/*!*****************************************************!*\
  !*** ./apps/common/config/client-ports.provider.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientPortsProvider = void 0;
class ClientPortsProvider {
    constructor(config) {
        this.config = config;
    }
    getClientPort(serviceName) {
        const portKey = `${serviceName.toUpperCase()}_CLIENT_PORT`;
        const port = this.config.get(portKey);
        if (!port) {
            throw new Error(`Port not configured for service: ${serviceName}`);
        }
        return port;
    }
}
exports.ClientPortsProvider = ClientPortsProvider;


/***/ }),

/***/ "./apps/common/config/index.ts":
/*!*************************************!*\
  !*** ./apps/common/config/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./client-config.module */ "./apps/common/config/client-config.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./client-config.service */ "./apps/common/config/client-config.service.ts"), exports);


/***/ }),

/***/ "./apps/common/db/database.module.ts":
/*!*******************************************!*\
  !*** ./apps/common/db/database.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const database_service_1 = __webpack_require__(/*! ./database.service */ "./apps/common/db/database.service.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: database_service_1.DatabaseConfigService,
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./apps/common/db/database.service.ts":
/*!********************************************!*\
  !*** ./apps/common/db/database.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseConfigService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let DatabaseConfigService = class DatabaseConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    async createTypeOrmOptions() {
        return {
            type: 'postgres',
            host: this.configService.get('DB_HOST'),
            port: Number(this.configService.get('DB_PORT')),
            username: this.configService.get('DB_USERNAME'),
            password: this.configService.get('DB_PASSWORD'),
            database: this.configService.get('DB_DATABASE'),
            autoLoadEntities: true,
            synchronize: true,
            migrations: ['dist/migrations/*.js'],
        };
    }
};
DatabaseConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], DatabaseConfigService);
exports.DatabaseConfigService = DatabaseConfigService;


/***/ }),

/***/ "./apps/common/decorators/public.decorator.ts":
/*!****************************************************!*\
  !*** ./apps/common/decorators/public.decorator.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),

/***/ "./apps/common/dto/page-meta/page-meta.dto.ts":
/*!****************************************************!*\
  !*** ./apps/common/dto/page-meta/page-meta.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageMetaDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class PageMetaDto {
    constructor({ pageOptionsDto, itemCount }) {
        this.page = pageOptionsDto.page ?? 1;
        this.limit = pageOptionsDto.limit ?? 10;
        this.itemCount = itemCount;
        this.pageCount = Math.ceil(this.itemCount / this.limit);
        this.hasPreviousPage = this.page > 1;
        this.hasNextPage = this.page < this.pageCount;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PageMetaDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PageMetaDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PageMetaDto.prototype, "itemCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PageMetaDto.prototype, "pageCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], PageMetaDto.prototype, "hasPreviousPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], PageMetaDto.prototype, "hasNextPage", void 0);
exports.PageMetaDto = PageMetaDto;


/***/ }),

/***/ "./apps/common/dto/page-meta/page-optional.dto.ts":
/*!********************************************************!*\
  !*** ./apps/common/dto/page-meta/page-optional.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageOptionsDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const page_enum_1 = __webpack_require__(/*! ./page.enum */ "./apps/common/dto/page-meta/page.enum.ts");
class PageOptionsDto {
    constructor() {
        this.order = page_enum_1.Order.ASC;
        this.page = 1;
        this.limit = 10;
        this.orderBy = 'id';
    }
    get skip() {
        return ((this.page ?? 1) - 1) * (this.limit ?? 10);
    }
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: page_enum_1.Order, default: page_enum_1.Order.ASC }),
    (0, class_validator_1.IsEnum)(page_enum_1.Order),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof page_enum_1.Order !== "undefined" && page_enum_1.Order) === "function" ? _a : Object)
], PageOptionsDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        minimum: 1,
        default: 1,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PageOptionsDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        minimum: 1,
        maximum: 50,
        default: 10,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PageOptionsDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 'id', description: 'Field to order by' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PageOptionsDto.prototype, "orderBy", void 0);
exports.PageOptionsDto = PageOptionsDto;


/***/ }),

/***/ "./apps/common/dto/page-meta/page.enum.ts":
/*!************************************************!*\
  !*** ./apps/common/dto/page-meta/page.enum.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Order = void 0;
var Order;
(function (Order) {
    Order["ASC"] = "ASC";
    Order["DESC"] = "DESC";
})(Order = exports.Order || (exports.Order = {}));


/***/ }),

/***/ "./apps/common/dto/page.dto.ts":
/*!*************************************!*\
  !*** ./apps/common/dto/page.dto.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const page_meta_dto_1 = __webpack_require__(/*! ./page-meta/page-meta.dto */ "./apps/common/dto/page-meta/page-meta.dto.ts");
class PageDto {
    constructor(data, meta) {
        this.data = data;
        this.meta = meta;
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ isArray: true }),
    __metadata("design:type", Array)
], PageDto.prototype, "data", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: () => page_meta_dto_1.PageMetaDto }),
    __metadata("design:type", typeof (_a = typeof page_meta_dto_1.PageMetaDto !== "undefined" && page_meta_dto_1.PageMetaDto) === "function" ? _a : Object)
], PageDto.prototype, "meta", void 0);
exports.PageDto = PageDto;


/***/ }),

/***/ "./apps/common/filters/global-http-exception.filter.ts":
/*!*************************************************************!*\
  !*** ./apps/common/filters/global-http-exception.filter.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let GlobalExceptionFilter = class GlobalExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const exceptionResponse = exception.getResponse();
        const formattedResponse = {
            success: false,
            error: '',
            data: '',
        };
        if (typeof exceptionResponse === 'string') {
            formattedResponse.error = exceptionResponse;
        }
        else if (exceptionResponse && typeof exceptionResponse === 'object') {
            const responseObj = exceptionResponse;
            if (Array.isArray(responseObj.message)) {
                formattedResponse.error = responseObj.message.join(', ');
            }
            else {
                formattedResponse.error = responseObj.message || 'An unexpected error occurred.';
            }
        }
        else {
            formattedResponse.error = 'An unexpected error occurred.';
        }
        response.status(status).json(formattedResponse);
    }
};
GlobalExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], GlobalExceptionFilter);
exports.GlobalExceptionFilter = GlobalExceptionFilter;


/***/ }),

/***/ "./apps/common/interceptors/global.interceptor.ts":
/*!********************************************************!*\
  !*** ./apps/common/interceptors/global.interceptor.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalResponseInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let GlobalResponseInterceptor = class GlobalResponseInterceptor {
    intercept(context, next) {
        const httpContext = context.switchToHttp();
        const response = httpContext.getResponse();
        return next.handle().pipe((0, operators_1.map)((data) => {
            if (data && typeof data === 'object' && 'status' in data && typeof data['status'] !== 'string') {
                response.status(data.status);
                return data;
            }
            if (Array.isArray(data) || data?.meta) {
                return {
                    success: true,
                    error: '',
                    data: data?.data || data,
                    meta: data?.meta || null,
                };
            }
            return {
                success: true,
                error: '',
                data: data,
            };
        }));
    }
};
GlobalResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], GlobalResponseInterceptor);
exports.GlobalResponseInterceptor = GlobalResponseInterceptor;


/***/ }),

/***/ "./apps/common/utils/helpers.ts":
/*!**************************************!*\
  !*** ./apps/common/utils/helpers.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isUniqueConstraintViolation = exports.appendSubPathsToBaseModule = void 0;
function appendSubPathsToBaseModule(basePath, controllers) {
    return controllers.map((controller) => {
        return {
            path: `${basePath}`,
            module: controller,
        };
    });
}
exports.appendSubPathsToBaseModule = appendSubPathsToBaseModule;
function isUniqueConstraintViolation(error) {
    return (error?.code === "ER_DUP_ENTRY" ||
        error?.code === "23505" ||
        error?.message?.includes("unique") ||
        error?.detail?.includes("already exists"));
}
exports.isUniqueConstraintViolation = isUniqueConstraintViolation;


/***/ }),

/***/ "./apps/common/utils/paginate.ts":
/*!***************************************!*\
  !*** ./apps/common/utils/paginate.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paginate = void 0;
const page_dto_1 = __webpack_require__(/*! ../dto/page.dto */ "./apps/common/dto/page.dto.ts");
const page_meta_dto_1 = __webpack_require__(/*! ../dto/page-meta/page-meta.dto */ "./apps/common/dto/page-meta/page-meta.dto.ts");
async function paginate(repo, pageOptionsDto, options) {
    const { skip, limit, order, orderBy } = pageOptionsDto;
    const [data, itemCount] = await repo.findAndCount({
        ...options,
        skip,
        take: limit,
        order: {
            ...(options?.order || {}),
            [orderBy]: order,
        },
    });
    const meta = new page_meta_dto_1.PageMetaDto({ pageOptionsDto, itemCount });
    return new page_dto_1.PageDto(data, meta);
}
exports.paginate = paginate;


/***/ }),

/***/ "./libs/contracts/src/address/address.dto.ts":
/*!***************************************************!*\
  !*** ./libs/contracts/src/address/address.dto.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressDto = void 0;
class AddressDto {
}
exports.AddressDto = AddressDto;


/***/ }),

/***/ "./libs/contracts/src/address/address.pattern.ts":
/*!*******************************************************!*\
  !*** ./libs/contracts/src/address/address.pattern.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ADDRESS_PATTERNS = void 0;
exports.ADDRESS_PATTERNS = {
    FIND_ALL: 'address.findAll',
    FIND_ONE: 'address.findOne',
    CREATE: 'address.create',
    UPDATE: 'address.update',
    DELETE: 'address.remove'
};


/***/ }),

/***/ "./libs/contracts/src/address/city/city.dto.ts":
/*!*****************************************************!*\
  !*** ./libs/contracts/src/address/city/city.dto.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CityDto = void 0;
class CityDto {
}
exports.CityDto = CityDto;


/***/ }),

/***/ "./libs/contracts/src/address/city/city.pattern.ts":
/*!*********************************************************!*\
  !*** ./libs/contracts/src/address/city/city.pattern.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CITY_PATTERNS = void 0;
exports.CITY_PATTERNS = {
    FIND_ALL: 'city.findAll',
    FIND_ONE: 'city.findOne',
    CREATE: 'city.create',
    UPDATE: 'city.update',
    DELETE: 'city.remove'
};


/***/ }),

/***/ "./libs/contracts/src/address/city/create-city.dto.ts":
/*!************************************************************!*\
  !*** ./libs/contracts/src/address/city/create-city.dto.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCityDto = void 0;
class CreateCityDto {
}
exports.CreateCityDto = CreateCityDto;


/***/ }),

/***/ "./libs/contracts/src/address/city/update-city.dto.ts":
/*!************************************************************!*\
  !*** ./libs/contracts/src/address/city/update-city.dto.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCityDto = void 0;
class UpdateCityDto {
}
exports.UpdateCityDto = UpdateCityDto;


/***/ }),

/***/ "./libs/contracts/src/address/country/country.dto.ts":
/*!***********************************************************!*\
  !*** ./libs/contracts/src/address/country/country.dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountryDto = void 0;
class CountryDto {
}
exports.CountryDto = CountryDto;


/***/ }),

/***/ "./libs/contracts/src/address/country/country.pattern.ts":
/*!***************************************************************!*\
  !*** ./libs/contracts/src/address/country/country.pattern.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COUNTRY_PATTERNS = void 0;
exports.COUNTRY_PATTERNS = {
    FIND_ALL: 'country.findAll',
    FIND_ONE: 'country.findOne',
    CREATE: 'country.create',
    UPDATE: 'country.update',
    DELETE: 'country.remove'
};


/***/ }),

/***/ "./libs/contracts/src/address/country/create-country.dto.ts":
/*!******************************************************************!*\
  !*** ./libs/contracts/src/address/country/create-country.dto.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCountryDto = void 0;
class CreateCountryDto {
}
exports.CreateCountryDto = CreateCountryDto;


/***/ }),

/***/ "./libs/contracts/src/address/country/update-country.dto.ts":
/*!******************************************************************!*\
  !*** ./libs/contracts/src/address/country/update-country.dto.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCountryDto = void 0;
class UpdateCountryDto {
}
exports.UpdateCountryDto = UpdateCountryDto;


/***/ }),

/***/ "./libs/contracts/src/address/create-address.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/contracts/src/address/create-address.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAddressDto = void 0;
class CreateAddressDto {
}
exports.CreateAddressDto = CreateAddressDto;


/***/ }),

/***/ "./libs/contracts/src/address/enums/address-type.enum.ts":
/*!***************************************************************!*\
  !*** ./libs/contracts/src/address/enums/address-type.enum.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressType = void 0;
var AddressType;
(function (AddressType) {
    AddressType["HOME"] = "home";
    AddressType["WORK"] = "work";
    AddressType["BILLING"] = "billing";
    AddressType["SHIPPING"] = "shipping";
    AddressType["OTHER"] = "other";
})(AddressType = exports.AddressType || (exports.AddressType = {}));


/***/ }),

/***/ "./libs/contracts/src/address/region/create-region.dto.ts":
/*!****************************************************************!*\
  !*** ./libs/contracts/src/address/region/create-region.dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRegionDto = void 0;
class CreateRegionDto {
}
exports.CreateRegionDto = CreateRegionDto;


/***/ }),

/***/ "./libs/contracts/src/address/region/region.dto.ts":
/*!*********************************************************!*\
  !*** ./libs/contracts/src/address/region/region.dto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegionDto = void 0;
class RegionDto {
}
exports.RegionDto = RegionDto;


/***/ }),

/***/ "./libs/contracts/src/address/region/region.pattern.ts":
/*!*************************************************************!*\
  !*** ./libs/contracts/src/address/region/region.pattern.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REGION_PATTERNS = void 0;
exports.REGION_PATTERNS = {
    FIND_ALL: 'region.findAll',
    FIND_ONE: 'region.findOne',
    CREATE: 'region.create',
    UPDATE: 'region.update',
    DELETE: 'region.remove'
};


/***/ }),

/***/ "./libs/contracts/src/address/region/update-region.dto.ts":
/*!****************************************************************!*\
  !*** ./libs/contracts/src/address/region/update-region.dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRegionDto = void 0;
class UpdateRegionDto {
}
exports.UpdateRegionDto = UpdateRegionDto;


/***/ }),

/***/ "./libs/contracts/src/address/update-address.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/contracts/src/address/update-address.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAddressDto = void 0;
class UpdateAddressDto {
}
exports.UpdateAddressDto = UpdateAddressDto;


/***/ }),

/***/ "./libs/contracts/src/auth/auth.dto.ts":
/*!*********************************************!*\
  !*** ./libs/contracts/src/auth/auth.dto.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/contracts/src/auth/auth.patterns.ts":
/*!**************************************************!*\
  !*** ./libs/contracts/src/auth/auth.patterns.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AUTH_PATTERN = void 0;
exports.AUTH_PATTERN = {
    USER_LOGIN: 'auth.userLogin',
    RESET_PASSWORD: 'auth.resetPassword',
    CHANGE_PASSWORD: 'auth.changePassword',
    VERIFY_EMAIL: 'auth.verifyEmail',
    MAIL_UNSUBSCRIBE: 'auth.mailUnsubscribe',
    MAIL_SUBSCRIBE: 'auth.mailSubscribe',
};


/***/ }),

/***/ "./libs/contracts/src/auth/contacts/contact.dto.ts":
/*!*********************************************************!*\
  !*** ./libs/contracts/src/auth/contacts/contact.dto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactDto = void 0;
class ContactDto {
}
exports.ContactDto = ContactDto;


/***/ }),

/***/ "./libs/contracts/src/auth/contacts/contact.pattern.ts":
/*!*************************************************************!*\
  !*** ./libs/contracts/src/auth/contacts/contact.pattern.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONTACT_PATTERNS = void 0;
exports.CONTACT_PATTERNS = {
    FIND_ALL: 'contact.findAll',
    FIND_ONE: 'contact.findOne',
    CREATE: 'contact.create',
    UPDATE: 'contact.update',
    DELETE: 'contact.remove'
};


/***/ }),

/***/ "./libs/contracts/src/auth/contacts/create-contact.dto.ts":
/*!****************************************************************!*\
  !*** ./libs/contracts/src/auth/contacts/create-contact.dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateContactDto = void 0;
class CreateContactDto {
}
exports.CreateContactDto = CreateContactDto;


/***/ }),

/***/ "./libs/contracts/src/auth/contacts/update-contact.dto.ts":
/*!****************************************************************!*\
  !*** ./libs/contracts/src/auth/contacts/update-contact.dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateContactDto = void 0;
class UpdateContactDto {
}
exports.UpdateContactDto = UpdateContactDto;


/***/ }),

/***/ "./libs/contracts/src/auth/groups/create-group.dto.ts":
/*!************************************************************!*\
  !*** ./libs/contracts/src/auth/groups/create-group.dto.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateGroupDto = void 0;
class CreateGroupDto {
}
exports.CreateGroupDto = CreateGroupDto;


/***/ }),

/***/ "./libs/contracts/src/auth/groups/create-user-group-permissions.dto.ts":
/*!*****************************************************************************!*\
  !*** ./libs/contracts/src/auth/groups/create-user-group-permissions.dto.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserGroupPermissionDto = void 0;
class CreateUserGroupPermissionDto {
}
exports.CreateUserGroupPermissionDto = CreateUserGroupPermissionDto;


/***/ }),

/***/ "./libs/contracts/src/auth/groups/create-user-group.dto.ts":
/*!*****************************************************************!*\
  !*** ./libs/contracts/src/auth/groups/create-user-group.dto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserGroupDto = void 0;
class CreateUserGroupDto {
}
exports.CreateUserGroupDto = CreateUserGroupDto;


/***/ }),

/***/ "./libs/contracts/src/auth/groups/group.dto.ts":
/*!*****************************************************!*\
  !*** ./libs/contracts/src/auth/groups/group.dto.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupDto = void 0;
class GroupDto {
}
exports.GroupDto = GroupDto;


/***/ }),

/***/ "./libs/contracts/src/auth/groups/group.pattern.ts":
/*!*********************************************************!*\
  !*** ./libs/contracts/src/auth/groups/group.pattern.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GROUP_PATTERNS = void 0;
exports.GROUP_PATTERNS = {
    FIND_ALL: 'group.findAll',
    FIND_ONE: 'group.findOne',
    CREATE: 'group.create',
    UPDATE: 'group.update',
    DELETE: 'group.remove'
};


/***/ }),

/***/ "./libs/contracts/src/auth/groups/update-group.dto.ts":
/*!************************************************************!*\
  !*** ./libs/contracts/src/auth/groups/update-group.dto.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateGroupDto = void 0;
class UpdateGroupDto {
}
exports.UpdateGroupDto = UpdateGroupDto;


/***/ }),

/***/ "./libs/contracts/src/auth/groups/update-user-group-permissions.dto.ts":
/*!*****************************************************************************!*\
  !*** ./libs/contracts/src/auth/groups/update-user-group-permissions.dto.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserGroupPermissionDto = void 0;
class UpdateUserGroupPermissionDto {
}
exports.UpdateUserGroupPermissionDto = UpdateUserGroupPermissionDto;


/***/ }),

/***/ "./libs/contracts/src/auth/groups/update-user-group.dto.ts":
/*!*****************************************************************!*\
  !*** ./libs/contracts/src/auth/groups/update-user-group.dto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserGroupDto = void 0;
class UpdateUserGroupDto {
}
exports.UpdateUserGroupDto = UpdateUserGroupDto;


/***/ }),

/***/ "./libs/contracts/src/auth/groups/user-group-permissions.dto.ts":
/*!**********************************************************************!*\
  !*** ./libs/contracts/src/auth/groups/user-group-permissions.dto.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserGroupPermissionDto = void 0;
class UserGroupPermissionDto {
}
exports.UserGroupPermissionDto = UserGroupPermissionDto;


/***/ }),

/***/ "./libs/contracts/src/auth/groups/user-group-permissions.pattern.ts":
/*!**************************************************************************!*\
  !*** ./libs/contracts/src/auth/groups/user-group-permissions.pattern.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USERGROUPPERMISSION_PATTERNS = void 0;
exports.USERGROUPPERMISSION_PATTERNS = {
    FIND_ALL: 'user-group-permissions.findAll',
    FIND_ONE: 'user-group-permissions.findOne',
    CREATE: 'user-group-permissions.create',
    UPDATE: 'user-group-permissions.update',
    DELETE: 'user-group-permissions.remove'
};


/***/ }),

/***/ "./libs/contracts/src/auth/groups/user-group.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/contracts/src/auth/groups/user-group.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserGroupDto = void 0;
class UserGroupDto {
}
exports.UserGroupDto = UserGroupDto;


/***/ }),

/***/ "./libs/contracts/src/auth/groups/user-group.pattern.ts":
/*!**************************************************************!*\
  !*** ./libs/contracts/src/auth/groups/user-group.pattern.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USERGROUP_PATTERNS = void 0;
exports.USERGROUP_PATTERNS = {
    FIND_ALL: 'user-group.findAll',
    FIND_ONE: 'user-group.findOne',
    CREATE: 'user-group.create',
    UPDATE: 'user-group.update',
    DELETE: 'user-group.remove'
};


/***/ }),

/***/ "./libs/contracts/src/auth/permissions/create-permission.dto.ts":
/*!**********************************************************************!*\
  !*** ./libs/contracts/src/auth/permissions/create-permission.dto.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePermissionDto = void 0;
class CreatePermissionDto {
}
exports.CreatePermissionDto = CreatePermissionDto;


/***/ }),

/***/ "./libs/contracts/src/auth/permissions/permission.dto.ts":
/*!***************************************************************!*\
  !*** ./libs/contracts/src/auth/permissions/permission.dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionDto = void 0;
class PermissionDto {
}
exports.PermissionDto = PermissionDto;


/***/ }),

/***/ "./libs/contracts/src/auth/permissions/permission.pattern.ts":
/*!*******************************************************************!*\
  !*** ./libs/contracts/src/auth/permissions/permission.pattern.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PERMISSION_PATTERNS = void 0;
exports.PERMISSION_PATTERNS = {
    FIND_ALL: 'permission.findAll',
    FIND_ONE: 'permission.findOne',
    CREATE: 'permission.create',
    UPDATE: 'permission.update',
    DELETE: 'permission.remove'
};


/***/ }),

/***/ "./libs/contracts/src/auth/permissions/update-permission.dto.ts":
/*!**********************************************************************!*\
  !*** ./libs/contracts/src/auth/permissions/update-permission.dto.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePermissionDto = void 0;
class UpdatePermissionDto {
}
exports.UpdatePermissionDto = UpdatePermissionDto;


/***/ }),

/***/ "./libs/contracts/src/auth/roles/create-role.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/contracts/src/auth/roles/create-role.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRoleDto = void 0;
class CreateRoleDto {
}
exports.CreateRoleDto = CreateRoleDto;


/***/ }),

/***/ "./libs/contracts/src/auth/roles/role.dto.ts":
/*!***************************************************!*\
  !*** ./libs/contracts/src/auth/roles/role.dto.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleDto = void 0;
class RoleDto {
}
exports.RoleDto = RoleDto;


/***/ }),

/***/ "./libs/contracts/src/auth/roles/role.pattern.ts":
/*!*******************************************************!*\
  !*** ./libs/contracts/src/auth/roles/role.pattern.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ROLE_PATTERNS = void 0;
exports.ROLE_PATTERNS = {
    FIND_ALL: 'role.findAll',
    FIND_ONE: 'role.findOne',
    CREATE: 'role.create',
    UPDATE: 'role.update',
    DELETE: 'role.remove'
};


/***/ }),

/***/ "./libs/contracts/src/auth/roles/update-role.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/contracts/src/auth/roles/update-role.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRoleDto = void 0;
class UpdateRoleDto {
}
exports.UpdateRoleDto = UpdateRoleDto;


/***/ }),

/***/ "./libs/contracts/src/auth/users/create-user.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/contracts/src/auth/users/create-user.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./libs/contracts/src/auth/users/enums/gender.enum.ts":
/*!************************************************************!*\
  !*** ./libs/contracts/src/auth/users/enums/gender.enum.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "female";
    Gender["MALE"] = "male";
})(Gender = exports.Gender || (exports.Gender = {}));


/***/ }),

/***/ "./libs/contracts/src/auth/users/update-user.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/contracts/src/auth/users/update-user.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
class UpdateUserDto {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./libs/contracts/src/auth/users/user.dto.ts":
/*!***************************************************!*\
  !*** ./libs/contracts/src/auth/users/user.dto.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = void 0;
class UserDto {
}
exports.UserDto = UserDto;


/***/ }),

/***/ "./libs/contracts/src/auth/users/user.pattern.ts":
/*!*******************************************************!*\
  !*** ./libs/contracts/src/auth/users/user.pattern.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_PATTERNS = void 0;
exports.USER_PATTERNS = {
    FIND_ALL: 'user.findAll',
    FIND_ONE: 'user.findOne',
    CREATE: 'user.create',
    UPDATE: 'user.update',
    DELETE: 'user.remove'
};


/***/ }),

/***/ "./libs/contracts/src/billing/enums/billable-type.enum.ts":
/*!****************************************************************!*\
  !*** ./libs/contracts/src/billing/enums/billable-type.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BillableTypeEnum = void 0;
var BillableTypeEnum;
(function (BillableTypeEnum) {
    BillableTypeEnum["Invoice"] = "invoice";
})(BillableTypeEnum = exports.BillableTypeEnum || (exports.BillableTypeEnum = {}));


/***/ }),

/***/ "./libs/contracts/src/billing/enums/entity-type.enum.ts":
/*!**************************************************************!*\
  !*** ./libs/contracts/src/billing/enums/entity-type.enum.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityTypeEnum = void 0;
var EntityTypeEnum;
(function (EntityTypeEnum) {
    EntityTypeEnum["USER"] = "user";
    EntityTypeEnum["CONTRACT"] = "contract";
    EntityTypeEnum["JOB_REQUEST"] = "job_request";
})(EntityTypeEnum = exports.EntityTypeEnum || (exports.EntityTypeEnum = {}));


/***/ }),

/***/ "./libs/contracts/src/billing/enums/invoice-type.enum.ts":
/*!***************************************************************!*\
  !*** ./libs/contracts/src/billing/enums/invoice-type.enum.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoiceTypeEnum = void 0;
var InvoiceTypeEnum;
(function (InvoiceTypeEnum) {
    InvoiceTypeEnum["General"] = "general";
    InvoiceTypeEnum["Subscription"] = "subscription";
    InvoiceTypeEnum["Adjustment"] = "adjustment";
    InvoiceTypeEnum["Refund"] = "refund";
})(InvoiceTypeEnum = exports.InvoiceTypeEnum || (exports.InvoiceTypeEnum = {}));


/***/ }),

/***/ "./libs/contracts/src/billing/enums/payment-status.enum.ts":
/*!*****************************************************************!*\
  !*** ./libs/contracts/src/billing/enums/payment-status.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentStatusEnum = void 0;
var PaymentStatusEnum;
(function (PaymentStatusEnum) {
    PaymentStatusEnum["Paid"] = "paid";
    PaymentStatusEnum["Unpaid"] = "unpaid";
    PaymentStatusEnum["Pending"] = "pending";
})(PaymentStatusEnum = exports.PaymentStatusEnum || (exports.PaymentStatusEnum = {}));


/***/ }),

/***/ "./libs/contracts/src/billing/enums/transaction-type.enum.ts":
/*!*******************************************************************!*\
  !*** ./libs/contracts/src/billing/enums/transaction-type.enum.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionTypeEnum = void 0;
var TransactionTypeEnum;
(function (TransactionTypeEnum) {
    TransactionTypeEnum["Debit"] = "debit";
    TransactionTypeEnum["Credit"] = "credit";
    TransactionTypeEnum["Refund"] = "refund";
})(TransactionTypeEnum = exports.TransactionTypeEnum || (exports.TransactionTypeEnum = {}));


/***/ }),

/***/ "./libs/contracts/src/billing/invoice/invoice-items-page-options.dto.ts":
/*!******************************************************************************!*\
  !*** ./libs/contracts/src/billing/invoice/invoice-items-page-options.dto.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoiceItemsPageOptionsDto = void 0;
const page_optional_dto_1 = __webpack_require__(/*! @app/common/dto/page-meta/page-optional.dto */ "./apps/common/dto/page-meta/page-optional.dto.ts");
class InvoiceItemsPageOptionsDto extends page_optional_dto_1.PageOptionsDto {
    constructor() {
        super(...arguments);
        this.orderBy = 'total_price';
    }
}
exports.InvoiceItemsPageOptionsDto = InvoiceItemsPageOptionsDto;


/***/ }),

/***/ "./libs/contracts/src/billing/invoice/invoice-page-options.dto.ts":
/*!************************************************************************!*\
  !*** ./libs/contracts/src/billing/invoice/invoice-page-options.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoicePageOptionsDto = void 0;
const page_optional_dto_1 = __webpack_require__(/*! @app/common/dto/page-meta/page-optional.dto */ "./apps/common/dto/page-meta/page-optional.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const payment_status_enum_1 = __webpack_require__(/*! ../enums/payment-status.enum */ "./libs/contracts/src/billing/enums/payment-status.enum.ts");
class InvoicePageOptionsDto extends page_optional_dto_1.PageOptionsDto {
    constructor() {
        super(...arguments);
        this.orderBy = 'date_paid';
    }
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: payment_status_enum_1.PaymentStatusEnum }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(payment_status_enum_1.PaymentStatusEnum),
    __metadata("design:type", typeof (_a = typeof payment_status_enum_1.PaymentStatusEnum !== "undefined" && payment_status_enum_1.PaymentStatusEnum) === "function" ? _a : Object)
], InvoicePageOptionsDto.prototype, "status", void 0);
exports.InvoicePageOptionsDto = InvoicePageOptionsDto;


/***/ }),

/***/ "./libs/contracts/src/billing/payment/initialize-payment.dto.ts":
/*!**********************************************************************!*\
  !*** ./libs/contracts/src/billing/payment/initialize-payment.dto.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InitializePaymentDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class InitializePaymentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The ID of the invoice', example: 'INV-202505082326110251', }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitializePaymentDto.prototype, "invoiceId", void 0);
exports.InitializePaymentDto = InitializePaymentDto;


/***/ }),

/***/ "./libs/contracts/src/billing/transaction/create-transaction-type.dto.ts":
/*!*******************************************************************************!*\
  !*** ./libs/contracts/src/billing/transaction/create-transaction-type.dto.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTransactionTypeDto = void 0;
const transaction_type_enum_1 = __webpack_require__(/*! @lib/contracts/billing/enums/transaction-type.enum */ "./libs/contracts/src/billing/enums/transaction-type.enum.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateTransactionTypeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The type of transaction (e.g., debit, credit, refund)', enum: transaction_type_enum_1.TransactionTypeEnum, example: transaction_type_enum_1.TransactionTypeEnum.Debit, }),
    (0, class_validator_1.IsEnum)(transaction_type_enum_1.TransactionTypeEnum),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof transaction_type_enum_1.TransactionTypeEnum !== "undefined" && transaction_type_enum_1.TransactionTypeEnum) === "function" ? _a : Object)
], CreateTransactionTypeDto.prototype, "transaction_type_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'A brief explanation of what this transaction type represents', example: 'A debit transaction reduces the account balance.', }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTransactionTypeDto.prototype, "transaction_type_description", void 0);
exports.CreateTransactionTypeDto = CreateTransactionTypeDto;


/***/ }),

/***/ "./libs/contracts/src/billing/transaction/transaction-page-options.dto.ts":
/*!********************************************************************************!*\
  !*** ./libs/contracts/src/billing/transaction/transaction-page-options.dto.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionPageOptionsDto = void 0;
const page_optional_dto_1 = __webpack_require__(/*! @app/common/dto/page-meta/page-optional.dto */ "./apps/common/dto/page-meta/page-optional.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const payment_status_enum_1 = __webpack_require__(/*! ../enums/payment-status.enum */ "./libs/contracts/src/billing/enums/payment-status.enum.ts");
class TransactionPageOptionsDto extends page_optional_dto_1.PageOptionsDto {
    constructor() {
        super(...arguments);
        this.orderBy = 'transaction_date';
    }
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: payment_status_enum_1.PaymentStatusEnum }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(payment_status_enum_1.PaymentStatusEnum),
    __metadata("design:type", typeof (_a = typeof payment_status_enum_1.PaymentStatusEnum !== "undefined" && payment_status_enum_1.PaymentStatusEnum) === "function" ? _a : Object)
], TransactionPageOptionsDto.prototype, "status", void 0);
exports.TransactionPageOptionsDto = TransactionPageOptionsDto;


/***/ }),

/***/ "./libs/contracts/src/index.ts":
/*!*************************************!*\
  !*** ./libs/contracts/src/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! @lib/contracts/auth/users/user.dto */ "./libs/contracts/src/auth/users/user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/users/create-user.dto */ "./libs/contracts/src/auth/users/create-user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/users/update-user.dto */ "./libs/contracts/src/auth/users/update-user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/users/user.pattern */ "./libs/contracts/src/auth/users/user.pattern.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/roles/role.dto */ "./libs/contracts/src/auth/roles/role.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/roles/create-role.dto */ "./libs/contracts/src/auth/roles/create-role.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/roles/update-role.dto */ "./libs/contracts/src/auth/roles/update-role.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/roles/role.pattern */ "./libs/contracts/src/auth/roles/role.pattern.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/permissions/permission.dto */ "./libs/contracts/src/auth/permissions/permission.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/permissions/create-permission.dto */ "./libs/contracts/src/auth/permissions/create-permission.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/permissions/update-permission.dto */ "./libs/contracts/src/auth/permissions/update-permission.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/permissions/permission.pattern */ "./libs/contracts/src/auth/permissions/permission.pattern.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/user-group.dto */ "./libs/contracts/src/auth/groups/user-group.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/create-user-group.dto */ "./libs/contracts/src/auth/groups/create-user-group.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/update-user-group.dto */ "./libs/contracts/src/auth/groups/update-user-group.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/user-group.pattern */ "./libs/contracts/src/auth/groups/user-group.pattern.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/user-group-permissions.dto */ "./libs/contracts/src/auth/groups/user-group-permissions.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/create-user-group-permissions.dto */ "./libs/contracts/src/auth/groups/create-user-group-permissions.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/update-user-group-permissions.dto */ "./libs/contracts/src/auth/groups/update-user-group-permissions.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/user-group-permissions.pattern */ "./libs/contracts/src/auth/groups/user-group-permissions.pattern.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/group.dto */ "./libs/contracts/src/auth/groups/group.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/create-group.dto */ "./libs/contracts/src/auth/groups/create-group.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/update-group.dto */ "./libs/contracts/src/auth/groups/update-group.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/groups/group.pattern */ "./libs/contracts/src/auth/groups/group.pattern.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/contacts/contact.dto */ "./libs/contracts/src/auth/contacts/contact.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/contacts/create-contact.dto */ "./libs/contracts/src/auth/contacts/create-contact.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/contacts/update-contact.dto */ "./libs/contracts/src/auth/contacts/update-contact.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/contacts/contact.pattern */ "./libs/contracts/src/auth/contacts/contact.pattern.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/region/region.dto */ "./libs/contracts/src/address/region/region.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/region/create-region.dto */ "./libs/contracts/src/address/region/create-region.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/region/update-region.dto */ "./libs/contracts/src/address/region/update-region.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/region/region.pattern */ "./libs/contracts/src/address/region/region.pattern.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/country/country.dto */ "./libs/contracts/src/address/country/country.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/country/create-country.dto */ "./libs/contracts/src/address/country/create-country.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/country/update-country.dto */ "./libs/contracts/src/address/country/update-country.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/country/country.pattern */ "./libs/contracts/src/address/country/country.pattern.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/city/city.dto */ "./libs/contracts/src/address/city/city.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/city/create-city.dto */ "./libs/contracts/src/address/city/create-city.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/city/update-city.dto */ "./libs/contracts/src/address/city/update-city.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/city/city.pattern */ "./libs/contracts/src/address/city/city.pattern.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/address.dto */ "./libs/contracts/src/address/address.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/create-address.dto */ "./libs/contracts/src/address/create-address.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/update-address.dto */ "./libs/contracts/src/address/update-address.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/address/address.pattern */ "./libs/contracts/src/address/address.pattern.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/auth.dto */ "./libs/contracts/src/auth/auth.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/auth/auth.patterns */ "./libs/contracts/src/auth/auth.patterns.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/messaging/mail/onboarding-mail.dto */ "./libs/contracts/src/messaging/mail/onboarding-mail.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/messaging/mail/approved-mail.dto */ "./libs/contracts/src/messaging/mail/approved-mail.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/messaging/mail/confirm-mail.dto */ "./libs/contracts/src/messaging/mail/confirm-mail.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/messaging/mail/payment-mail.dto */ "./libs/contracts/src/messaging/mail/payment-mail.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/messaging/mail/rejected-mail.dto */ "./libs/contracts/src/messaging/mail/rejected-mail.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/messaging/mail/reset-pass-mail.dto */ "./libs/contracts/src/messaging/mail/reset-pass-mail.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/messaging/mail/welcome-mail.dto */ "./libs/contracts/src/messaging/mail/welcome-mail.dto.ts"), exports);
__exportStar(__webpack_require__(/*! @lib/contracts/messaging/mail/mail.pattern */ "./libs/contracts/src/messaging/mail/mail.pattern.ts"), exports);


/***/ }),

/***/ "./libs/contracts/src/messaging/mail/approved-mail.dto.ts":
/*!****************************************************************!*\
  !*** ./libs/contracts/src/messaging/mail/approved-mail.dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApprovedMailDto = void 0;
class ApprovedMailDto {
}
exports.ApprovedMailDto = ApprovedMailDto;


/***/ }),

/***/ "./libs/contracts/src/messaging/mail/confirm-mail.dto.ts":
/*!***************************************************************!*\
  !*** ./libs/contracts/src/messaging/mail/confirm-mail.dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfirmMailDto = void 0;
class ConfirmMailDto {
}
exports.ConfirmMailDto = ConfirmMailDto;


/***/ }),

/***/ "./libs/contracts/src/messaging/mail/mail.pattern.ts":
/*!***********************************************************!*\
  !*** ./libs/contracts/src/messaging/mail/mail.pattern.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAIL_PATTERN = void 0;
exports.MAIL_PATTERN = {
    MAIL_ONBOARDING_SEND: 'onboarding.mail.send',
    MAIL_WELCOME_SEND: 'welcome.mail.send',
    MAIL_RESET_PASSWORD_SEND: 'reset_password.mail.send',
    MAIL_VERIFICATION_SEND: 'verification.mail.send',
    MAIL_QR_CODE_SEND: 'qrcode.mail.send',
};


/***/ }),

/***/ "./libs/contracts/src/messaging/mail/onboarding-mail.dto.ts":
/*!******************************************************************!*\
  !*** ./libs/contracts/src/messaging/mail/onboarding-mail.dto.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnboardingMailDto = void 0;
class OnboardingMailDto {
}
exports.OnboardingMailDto = OnboardingMailDto;


/***/ }),

/***/ "./libs/contracts/src/messaging/mail/payment-mail.dto.ts":
/*!***************************************************************!*\
  !*** ./libs/contracts/src/messaging/mail/payment-mail.dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentMailDto = void 0;
class PaymentMailDto {
}
exports.PaymentMailDto = PaymentMailDto;


/***/ }),

/***/ "./libs/contracts/src/messaging/mail/rejected-mail.dto.ts":
/*!****************************************************************!*\
  !*** ./libs/contracts/src/messaging/mail/rejected-mail.dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RejectedMailDto = void 0;
class RejectedMailDto {
}
exports.RejectedMailDto = RejectedMailDto;


/***/ }),

/***/ "./libs/contracts/src/messaging/mail/reset-pass-mail.dto.ts":
/*!******************************************************************!*\
  !*** ./libs/contracts/src/messaging/mail/reset-pass-mail.dto.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetPasswordMailDto = void 0;
class ResetPasswordMailDto {
}
exports.ResetPasswordMailDto = ResetPasswordMailDto;


/***/ }),

/***/ "./libs/contracts/src/messaging/mail/welcome-mail.dto.ts":
/*!***************************************************************!*\
  !*** ./libs/contracts/src/messaging/mail/welcome-mail.dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WelcomeMailDto = void 0;
class WelcomeMailDto {
}
exports.WelcomeMailDto = WelcomeMailDto;


/***/ }),

/***/ "./libs/contracts/src/resources/enums/document-type.enum.ts":
/*!******************************************************************!*\
  !*** ./libs/contracts/src/resources/enums/document-type.enum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentEntityTypeEnum = void 0;
var DocumentEntityTypeEnum;
(function (DocumentEntityTypeEnum) {
    DocumentEntityTypeEnum["JOB_REQUEST"] = "JOB_REQUEST";
    DocumentEntityTypeEnum["SERVICE"] = "SERVICE";
    DocumentEntityTypeEnum["SERVICE_CATEGORY"] = "SERVICE_CATEGORY";
})(DocumentEntityTypeEnum = exports.DocumentEntityTypeEnum || (exports.DocumentEntityTypeEnum = {}));


/***/ }),

/***/ "./libs/contracts/src/resources/enums/media-type.enum.ts":
/*!***************************************************************!*\
  !*** ./libs/contracts/src/resources/enums/media-type.enum.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaTypeEnum = void 0;
var MediaTypeEnum;
(function (MediaTypeEnum) {
    MediaTypeEnum["IMAGE"] = "image";
    MediaTypeEnum["VIDEO"] = "video";
    MediaTypeEnum["DOCUMENT"] = "document";
})(MediaTypeEnum = exports.MediaTypeEnum || (exports.MediaTypeEnum = {}));


/***/ }),

/***/ "./libs/contracts/src/ticketing/enums/category.enum.ts":
/*!*************************************************************!*\
  !*** ./libs/contracts/src/ticketing/enums/category.enum.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketCategoryEnum = void 0;
var TicketCategoryEnum;
(function (TicketCategoryEnum) {
    TicketCategoryEnum["GRG"] = "grg";
    TicketCategoryEnum["NCR"] = "ncr";
    TicketCategoryEnum["Diebold"] = "diebold";
    TicketCategoryEnum["Hyosung"] = "hyosung";
    TicketCategoryEnum["Other"] = "other";
})(TicketCategoryEnum = exports.TicketCategoryEnum || (exports.TicketCategoryEnum = {}));


/***/ }),

/***/ "./libs/contracts/src/ticketing/enums/priority.enum.ts":
/*!*************************************************************!*\
  !*** ./libs/contracts/src/ticketing/enums/priority.enum.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketPriorityEnum = void 0;
var TicketPriorityEnum;
(function (TicketPriorityEnum) {
    TicketPriorityEnum["LOW"] = "low";
    TicketPriorityEnum["MEDIUM"] = "medium";
    TicketPriorityEnum["HIGH"] = "high";
    TicketPriorityEnum["CRITICAL"] = "critical";
})(TicketPriorityEnum = exports.TicketPriorityEnum || (exports.TicketPriorityEnum = {}));


/***/ }),

/***/ "./libs/contracts/src/ticketing/enums/request-type.enum.ts":
/*!*****************************************************************!*\
  !*** ./libs/contracts/src/ticketing/enums/request-type.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketRequestTypeEnum = void 0;
var TicketRequestTypeEnum;
(function (TicketRequestTypeEnum) {
    TicketRequestTypeEnum["QUERY"] = "query";
    TicketRequestTypeEnum["SERVICE_REQUEST"] = "service_request";
    TicketRequestTypeEnum["MAINTENANCE"] = "maintenance";
    TicketRequestTypeEnum["SUPPORT"] = "technical_support";
})(TicketRequestTypeEnum = exports.TicketRequestTypeEnum || (exports.TicketRequestTypeEnum = {}));


/***/ }),

/***/ "./libs/contracts/src/ticketing/enums/site-type.enum.ts":
/*!**************************************************************!*\
  !*** ./libs/contracts/src/ticketing/enums/site-type.enum.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketSiteTypeEnum = void 0;
var TicketSiteTypeEnum;
(function (TicketSiteTypeEnum) {
    TicketSiteTypeEnum["BRANCH"] = "branch";
    TicketSiteTypeEnum["STANDALONE"] = "atm_standalone";
})(TicketSiteTypeEnum = exports.TicketSiteTypeEnum || (exports.TicketSiteTypeEnum = {}));


/***/ }),

/***/ "./libs/contracts/src/ticketing/enums/status.enum.ts":
/*!***********************************************************!*\
  !*** ./libs/contracts/src/ticketing/enums/status.enum.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketStatusEnum = void 0;
var TicketStatusEnum;
(function (TicketStatusEnum) {
    TicketStatusEnum["REGISTERED"] = "case_registered";
    TicketStatusEnum["ASSIGNED"] = "engineer_assigned";
    TicketStatusEnum["TRANSIT"] = "engineer_in_transit";
    TicketStatusEnum["ONSITE"] = "engineer_onsite";
    TicketStatusEnum["IN_PROGRESS"] = "work_in_progress";
    TicketStatusEnum["CLOSED"] = "closed";
})(TicketStatusEnum = exports.TicketStatusEnum || (exports.TicketStatusEnum = {}));


/***/ }),

/***/ "@nestjs-modules/mailer":
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter":
/*!**************************************************************************!*\
  !*** external "@nestjs-modules/mailer/dist/adapters/handlebars.adapter" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");

/***/ }),

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mapped-types":
/*!***************************************!*\
  !*** external "@nestjs/mapped-types" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************************!*\
  !*** ./apps/api-gateway/src/main.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const api_gateway_module_1 = __webpack_require__(/*! ./api-gateway.module */ "./apps/api-gateway/src/api-gateway.module.ts");
const global_interceptor_1 = __webpack_require__(/*! apps/common/interceptors/global.interceptor */ "./apps/common/interceptors/global.interceptor.ts");
const global_http_exception_filter_1 = __webpack_require__(/*! apps/common/filters/global-http-exception.filter */ "./apps/common/filters/global-http-exception.filter.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(api_gateway_module_1.ApiGatewayModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API')
        .setDescription('API description')
        .setVersion('0.0.0.1')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const reflector = app.get(core_1.Reflector);
    app.useGlobalFilters(new global_http_exception_filter_1.GlobalExceptionFilter());
    app.useGlobalInterceptors(new global_interceptor_1.GlobalResponseInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const corsOptions = {
        origin: '*',
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
        allowedHeaders: ['Content-Type', 'Authorization', '*'],
        credentials: true
    };
    app.enableCors(corsOptions);
    await app.listen(process.env.port ?? 3000);
}
bootstrap();

})();

/******/ })()
;