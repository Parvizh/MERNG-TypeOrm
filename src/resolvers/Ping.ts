import { Request } from "express"
import { Query, Resolver, Ctx, InputType, Field, Int, Arg } from 'type-graphql'
interface ICustomRequest extends Request {
    user?: string;
}
interface MyContext {
    req: ICustomRequest;
}

@InputType()
class OrderByInputType {
    @Field()
    fieldName: string;

    @Field(() => Int)
    direction: number;

    constructor(fieldName: string, direction: number) {
        this.fieldName = fieldName;
        this.direction = direction
    }
}

@InputType()
class PaginationInputType {
    @Field(() => Int)
    take: number;

    @Field(() => Int)
    skip: number;

    constructor(take: number, skip: number) {
        this.take = take;
        this.skip = skip
    }
}

@Resolver()
export class PingResolver {
    @Query(() => String)
    ping(@Ctx() ctx: MyContext,
        @Arg("OrderBy", { nullable: true }) OrderBy?: OrderByInputType,
        @Arg("Pagination", { nullable: true }) Pagination?: PaginationInputType
    ) {
        ctx.req.user = 'kjnkj'
        console.log(OrderBy?.fieldName)
        return "Pong!"
    }
}
