import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

// services
import { ContactsService } from "./contacts.service";

// dto
import { CreateContactDto } from "@lib/contracts/auth/contacts/create-contact.dto";
import { UpdateContactDto } from "@lib/contracts/auth/contacts/update-contact.dto";

@Controller('contacts')
export class ContactsController{

    constructor(private readonly contactsService: ContactsService) {}

    @Post()
    create(@Body() dto: CreateContactDto){
        return this.contactsService.create(dto);
    }
    
    @Get()
    findAll(){
        return this.contactsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.contactsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string , @Body() dto: UpdateContactDto){
        return this.contactsService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.contactsService.remove(id);
    }
}