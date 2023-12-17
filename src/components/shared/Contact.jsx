import { PiPaperPlaneTiltFill, PiMapPinFill, PiPhoneFill } from "react-icons/pi";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import SectionTitle from "./SectionTitle";
import Points from "./Points";
import { toast } from "react-hot-toast";

const Contact = () => {
    return (
        <section id="contact">
            <SectionTitle title='I WANT TO HEAR FROM YOU' subTitle="Contact Me"></SectionTitle>

            <div className="hero">
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">


                    <div className="card col-span-2 border border-secondary bg-base-100">
                        <form onSubmit={() => toast('Mail Sent Successfully!', { icon: '👏' })} action="https://formsubmit.co/shehjad0mobin@gmail.com" method="POST" className="card-body">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered input-lg" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered input-lg" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" name="subject" placeholder="Subject" className="input input-bordered input-lg" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Massage</span>
                                </label>
                                <textarea name="message" placeholder="Message" className="textarea textarea-bordered textarea-lg w-full" rows="6"></textarea>
                                {/* <input type="password" placeholder="password" className="input input-bordered input-lg" required /> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary btn-lg">Send <PiPaperPlaneTiltFill /></button>
                            </div>
                        </form>
                    </div>


                    <div className="flex flex-col gap-12">
                        <Points icon={IoMdMail} field='Email' value='shehjad0mobin@gmail.com' />
                        <Points icon={PiPhoneFill} field='Phone' value='+88 016 22588 235' />
                        <Points icon={IoLogoWhatsapp} field='Whatsapp' value='+88 017 3298 5103' />
                        <Points icon={PiMapPinFill} field='Location' value='Rajshahi, Bangladesh' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;