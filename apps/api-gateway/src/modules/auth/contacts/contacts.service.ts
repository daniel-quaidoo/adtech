import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";

// constants
import { CONTACT_NOT_FOUND } from "./contact.constants";

// entity
import { Contact } from "./entities/contact.entity";
import { User } from "../users/entities/user.entity";

// dto
import { CreateContactDto } from "@lib/contracts/auth/contacts/create-contact.dto";
import { UpdateContactDto } from "@lib/contracts/auth/contacts/update-contact.dto";



@Injectable()
export class ContactsService{

    constructor(
        @InjectRepository(Contact)
        private readonly contactRepo: Repository<Contact>,
    
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ) {}

    async create(dto: CreateContactDto) : Promise<Contact>{
        const user = await this.userRepo.findOneBy({user_id: dto.user.user_id});
        if (!user) throw new NotFoundException ("User not found");

        const contact = this.contactRepo.create({
            ...dto,
            user,
        });

        return this.contactRepo.save(contact);
    }

    async findAll(): Promise<Contact[]>{
        return this.contactRepo.find({relations: ['user']});
    }

    async findOne(id:string): Promise<Contact>{
        const contact = await this.contactRepo.findOne({
            where: {id},
            relations: ['user'],
        });

        if (!contact) throw new NotFoundException(CONTACT_NOT_FOUND);
        return contact;
    }

    async update(id:string, dto: UpdateContactDto): Promise< Contact>{
        const contact = await this.findOne(id);
        Object.assign(contact, dto);
        return this.contactRepo.save(contact);
    }

    async remove(id: string): Promise<void>{
        const contact = await this.findOne(id);
        await this.contactRepo.remove(contact);
    }
    
}