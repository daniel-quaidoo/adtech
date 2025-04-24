import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AddressService } from './address.service';

//dto
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('address')
export class AddressController {
    constructor(
        private readonly addressService:AddressService
    ){}

    //Address Endpoints
    @Post()
    createAddress(@Body() dto: CreateAddressDto){
        return this.addressService.createAddress(dto)
    }

    @Get()
    getAllAddresses(){
        return this.addressService.findAllAddresses()
    }

    @Get('/:addressId')
    findOneAddress(@Param ('addressId') addressId: string){
        return this.addressService.findOneAddress(addressId)
    }

    @Patch('/:addressId')
    updateAddress(@Param ('addressId') addressId: string, @Body() dto: UpdateAddressDto){
        return this.addressService.updateAddress(addressId, dto)
    }

    @Delete('/:addressId')
    deleteAddress(@Param('addressId') addressId:string){
        return this.addressService.deleteAddress(addressId)
    }

    //Country Endpoints

    @Post('countries')
    createCountry(@Body() dto: CreateCountryDto){
        return this.addressService.createCountry(dto)
    }

    @Get('countries')
    getAllCountries(){
        return this.addressService.findAllCountries()
    }

    @Get('countries/:countryId')
    findOneCountry(@Param ('countryId') countryId: string){
        return this.addressService.findOneCountry(countryId)
    }

    @Patch('countries/:countryId')
    updateCountry(@Param ('countryId') countryId: string, @Body() dto: UpdateCountryDto){
        return this.addressService.updateCountry(countryId, dto)
    }

    @Delete('countries/:countryId')
    deleteCountry(@Param('countryId') countryId:string){
        return this.addressService.deleteCountry(countryId)
    }

    //Region Endpoints
        
    @Post('regions')
    createRegion(@Body() dto: CreateRegionDto){
        return this.addressService.createRegion(dto)
    }

    @Get('regions')
    getAllRegions(){
        return this.addressService.findAllRegions()
    }

    @Get('regions/:regionId')
    findOneRegion(@Param ('regionId') regionId: string){
        return this.addressService.findOneRegion(regionId)
    }

    @Patch('regions/:regionId')
    updateRegion(@Param ('regionId') regionId: string, @Body() dto: UpdateRegionDto){
        return this.addressService.updateRegion(regionId, dto)
    }

    @Delete('regions/:regionId')
    deleteRegion(@Param('regionId') regionId:string){
        return this.addressService.deleteRegion(regionId)
    }



    //City Endpoints
        
    @Post('cities')
    createCity(@Body() dto: CreateCityDto){
        return this.addressService.createCity(dto)
    }

    @Get('cities')
    getAllcities(){
        return this.addressService.findAllCities()
    }

    @Get('cities/:cityId')
    findOneCity(@Param ('cityId') cityId: string){
        return this.addressService.findOneCity(cityId)
    }

    @Patch('cities/:cityId')
    updateCity(@Param ('cityId') cityId: string, @Body() dto: UpdateCityDto){
        return this.addressService.updateCity(cityId, dto)
    }

    @Delete('cities/:cityId')
    deleteCity(@Param('cityId') cityId:string){
        return this.addressService.deleteCity(cityId)
    }
}
