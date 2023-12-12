import { PiPaperPlaneTiltFill, PiMapPinFill } from "react-icons/pi";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import SectionTitle from "./SectionTitle";

const Contact = () => {
    return (
        <section>
            <SectionTitle title='I WANT TO HEAR FROM YOU' subTitle="Contact Me"></SectionTitle>

            <div className="hero">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-12">
                        <div className="flex items-center gap-4">
                            <figure className="p-4 bg-secondary/40 rounded-md">
                                <IoMdMail className="text-2xl" />
                            </figure>
                            <div>
                                <h3 className="font-bold text-2xl">Email</h3>
                                <p className="font-medium text-lg">shehjad0mobin@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <figure className="p-4 bg-secondary/40 rounded-md">
                                <IoLogoWhatsapp className="text-2xl" />
                            </figure>
                            <div>
                                <h3 className="font-bold text-2xl">Whatsapp</h3>
                                <p className="font-medium text-lg">+88 017 3298 5103</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <figure className="p-4 bg-secondary/40 rounded-md">
                                <PiMapPinFill className="text-2xl" />
                            </figure>
                            <div>
                                <h3 className="font-bold text-2xl">Address</h3>
                                <p className="font-medium text-lg">Rajshahi, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-span-2 border border-secondary bg-base-100">
                        <form className="card-body">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered input-lg" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered input-lg" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered input-lg" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Massage</span>
                                </label>
                                <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full" rows="6"></textarea>
                                {/* <input type="password" placeholder="password" className="input input-bordered input-lg" required /> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary btn-lg">Send <PiPaperPlaneTiltFill /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;