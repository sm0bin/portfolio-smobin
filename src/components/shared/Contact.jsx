const Contact = () => {
    return (
        <div className="hero py-32 bg-base-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card col-span-2 border border-secondary bg-base-100">
                    <form className="card-body">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered input-lg" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered input-lg" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full" rows="6"></textarea>
                            {/* <input type="password" placeholder="password" className="input input-bordered input-lg" required /> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary btn-lg">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;