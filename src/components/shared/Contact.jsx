import { PiPaperPlaneTiltFill, PiMapPinFill } from "react-icons/pi";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import SectionTitle from "./SectionTitle";
import Points from "./Points";

const Contact = () => {
    return (
        <section>
            <SectionTitle title='I WANT TO HEAR FROM YOU' subTitle="Contact Me"></SectionTitle>

            <div className="hero">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-12">
                        <Points icon={IoMdMail} field='Email' value='shehjad0mobin@gmail.com' />
                        <Points icon={IoLogoWhatsapp} field='Whatsapp' value='+88 017 3298 5103' />
                        <Points icon={PiMapPinFill} field='Email' value='Rajshahi, Bangladesh' />
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