"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from '../InputField';

const schema = z.object({
  title: z.string().min(2, { message: 'Title is required.' }),
  class: z.string().min(2, { message: 'Class Name must be atleast 2 charcters long (eg: 1A, 5B, 10C etc)' }).max(3, { message: 'Class Name must be less than 3 charcters (eg: 1A, 5B, 10C etc)' }),
  date: z.iso.date({ message: 'Date is required.' }),
});

type Inputs = z.infer<typeof schema>;

const AnnouncementForm = ({reqType, data}: { reqType: "create" | "update"; data?: any }) => {

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>({
      resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit(data => {
      console.log(data)
    })

  return <form onSubmit={onSubmit} className='flex flex-col gap-4'>
    <h1 className='text-xl font-semibold'>{reqType === "create" ? "Create a new" : "Update"} announcement</h1>
    <span className='text-xs text-gray-500 font-medium'>Announcement Information</span>
    <div className="flex items-center justify-center gap-6 flex-wrap">
      <InputField label="Title" name='title' defaultVal={data?.title} register={register} error={errors?.title} />
      <InputField label="Class Name" name='class' defaultVal={data?.class} register={register} error={errors?.class} />
      <InputField label="Date" name='date' inputType='date' defaultVal={data?.date} register={register} error={errors?.date} />
    </div>
    {/* <span className='text-xs text-gray-500 font-medium'>Personal Information</span>
    <div className="flex items-center justify-center gap-6 flex-wrap">
      <InputField label="Last Name" name='lastName' defaultVal={data?.lastName} register={register} error={errors?.lastName} />
      <InputField label="Phone" name='phone' defaultVal={data?.phone} register={register} error={errors?.phone} />
      <InputField label="Address" name='address' defaultVal={data?.address} register={register} error={errors?.address} />
      <InputField label="Blood Group" name='bloodType' defaultVal={data?.bloodType} register={register} error={errors?.bloodType} />
      <InputField label="Birthday" name='birthday' inputType='date' defaultVal={data?.birthday} register={register} error={errors?.birthday} />
      <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label htmlFor="" className="text-xs text-primary font-semibold">Sex</label>
        <select {...register("sex")} className='ring-2 ring-gray-300 p-2 rounded-lg text-sm w-full' defaultValue={data?.sex}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="transgender">Transgender</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
        {errors.sex?.message && <p className="text-sm text-red-600 font-medium">{errors.sex.message.toString()}</p>}
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label htmlFor="img" className="text-xs text-primary font-semibold flex items-center gap-2 cursor-pointer">
          <Image src="/upload.svg" alt="upload-icon" width={28} height={28} />
          <span className=''>Upload your photo</span>
        </label>
        <input type="file" id='img' {...register("img")} className='hidden' />
        {errors.img?.message && <p className="text-sm text-red-600 font-medium">{errors.img.message.toString()}</p>}
      </div>
    </div> */}
    <button className="text-sm font-semibold py-1 px-3 cursor-pointer rounded-sm bg-primary/90 text-white border hover:bg-primary transition">{reqType === "create" ? "Create" : "Update"}</button>
  </form>
}
export default AnnouncementForm