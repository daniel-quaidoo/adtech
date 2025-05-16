import { FindManyOptions, Repository } from "typeorm";
import { PageOptionsDto } from "../dto/page-meta/page-optional.dto";
import { PageDto } from "../dto/page.dto";
import { PageMetaDto } from "../dto/page-meta/page-meta.dto";

export async function paginate<T>(
    repo: Repository<T>,
    pageOptionsDto: PageOptionsDto,
    options?: Omit<FindManyOptions<T>, 'skip' | 'take' >, // Allow 'order' to exist
  ): Promise<PageDto<T>> {
    const { skip, limit, order, orderBy } = pageOptionsDto;

  
    const [data, itemCount] = await repo.findAndCount({
      ...options,
      skip,
      take: limit,
      order: {
      ...(options?.order || {}),
      [orderBy]: order, // ← Dynamically use orderBy
    },
    });
  
    const meta = new PageMetaDto({ pageOptionsDto, itemCount });
    return new PageDto(data, meta);
  }