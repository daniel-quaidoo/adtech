import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';

//entity
import { Country } from './entities/country.entity';
import { Region } from './entities/region.entity';
import { City } from './entities/city.entity';
import { Address } from './entities/address.entity';
import { AddressDto, CreateAddressDto, CreateCityDto, CreateCountryDto, CreateRegionDto, UpdateAddressDto, UpdateCityDto, UpdateCountryDto, UpdateRegionDto } from '@lib/contracts';

//dto






@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Country) private readonly countryRepo: Repository<Country>,
        @InjectRepository(Region) private readonly regionRepo: Repository<Region>,
        @InjectRepository(City) private readonly cityRepo: Repository<City>,
        @InjectRepository(Address) private readonly addressRepo: Repository<Address>
    ){}

    //Address  Functions

    async createAddress(dto: CreateAddressDto): Promise<Address>{
        // const {city, region, country} = dto

        const city = await this.cityRepo.findOne({ where: { city_id: dto.city.city_id}});
        if(!city) throw new NotFoundException("City does not exist")

        const region = await this.regionRepo.findOne({where: {region_id: dto.region.region_id}})
        if (!region) throw new NotFoundException("Region does not exist")

        const country = await this.countryRepo.findOne({where: {country_id: dto.country.country_id}})
        if (!country) throw new NotFoundException("Country does not exist")

        const address = this.addressRepo.create({
            ...dto,
            city,
            region,
            country,
        });

        return this.addressRepo.save(address);
         
    }

    async findAllAddresses(): Promise<AddressDto[]>{
        return this.addressRepo.find()
    }

    async findOneAddress(id:string): Promise<AddressDto>{
        const address = await this.addressRepo.findOne({where: {address_id:id}})
        if(!address) throw new NotFoundException("Address not found")

        return address;
    }

    async updateAddress(id:string, dto:UpdateAddressDto): Promise<AddressDto>{
        const address = await this.findOneAddress(id);
        Object.assign(address, dto);
        return this.addressRepo.save(address);
        }

        
    async deleteAddress(id: string): Promise<void> {
        const result = await this.addressRepo.delete(id);
        if (result.affected === 0) throw new NotFoundException('Address not found');
        }
    
    
    //Country FUnctions

    async createCountry(dto: CreateCountryDto): Promise<Country>{
        const country = this.countryRepo.create(dto);
        return this.countryRepo.save(country);
    }

    async findAllCountries(): Promise< Country[]>{
        return this.countryRepo.find();
    }

    async findOneCountry(id:string): Promise<Country>{
        const country = await this.countryRepo.findOne({where: {country_id: id}})

        if (!country) throw new NotFoundException("Country not found")
        
        return country;
    }

    async updateCountry(id: string, dto: UpdateCountryDto): Promise<Country>{
        const country = await this.countryRepo.findOne({where: {country_id: id}})

        if (!country) throw new NotFoundException("Country not found")

        Object.assign(country, dto);
        
        return this.countryRepo.save(country);
    }

    async deleteCountry(id: string): Promise<void>{
        const country = await this.countryRepo.delete(id)
        if (country.affected === 0) throw new NotFoundException("Country Not Found")
    }



    //Region Functions
    async createRegion(dto: CreateRegionDto): Promise<Region>{
        const country = await this.countryRepo.findOne({where: {country_id: dto.country.country_id}})
        if (!country) throw new NotFoundException('Country not found');

        const region = this.regionRepo.create({...dto, country})
        return this.regionRepo.save(region);
    }

    async findAllRegions(): Promise< Region[]>{
        return this.regionRepo.find();
    }

    async findOneRegion(id:string): Promise<Region>{
        const region = await this.regionRepo.findOne({where: {region_id: id}})

        if (!region) throw new NotFoundException("Region not found")
        
        return region;
    }

    async updateRegion(id: string, dto: UpdateRegionDto): Promise<Region>{
        const region = await this.regionRepo.findOne({where: {region_id: id}})

        if (!region) throw new NotFoundException("Region not found")

        Object.assign(region, dto);
        
        return this.regionRepo.save(region);
    }

    async deleteRegion(id: string): Promise<void>{
        const region = await this.regionRepo.delete(id)
        if (region.affected === 0) throw new NotFoundException("Region Not Found")
    }



    //City Functions
    async createCity(dto: CreateCityDto): Promise<City>{
        const region = await this.regionRepo.findOne({where: {region_id: dto.region.region_id}})
        if (!region) throw new NotFoundException('Region not found');

        const city = this.cityRepo.create({...dto, region})
        return this.cityRepo.save(city);
    }

    async findAllCities(): Promise< City[]>{
        return this.cityRepo.find();
    }

    async findOneCity(id:string): Promise<City>{
        const city = await this.cityRepo.findOne({where: {city_id: id}})

        if (!city) throw new NotFoundException("City not found")
        
        return city;
    }

    async updateCity(id: string, dto: UpdateCityDto): Promise<City>{
        const city = await this.cityRepo.findOne({where: {city_id: id}})

        if (!city) throw new NotFoundException("City not found")

        Object.assign(city, dto);
        
        return this.cityRepo.save(city);
    }

    async deleteCity(id: string): Promise<void>{
        const city = await this.cityRepo.delete(id)
        if (city.affected === 0) throw new NotFoundException("City Not Found")
    }

    

}
