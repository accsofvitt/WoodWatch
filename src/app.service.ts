import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Supabase } from './common/supabase';
import { v4 as uuid } from 'uuid';

type Meeting = {
  id: uuid;
  title: string;
  description: string;
  date;
  owner: uuid;
};

@Injectable()
export class AppService {
  constructor(private readonly supabase: Supabase) {}

  async getMeeting(): Promise<Meeting[]> {
    console.log(this.supabase.getClient());
    const { data, error } = await this.supabase
      .getClient()
      .from<Meeting>('meetings')
      .select();

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return data;
  }
}
