import React from 'react';

const UserConfrimationModal = ({title,message,closemodal,successaction,modaldata}) => {
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="user_confrimation_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=>successaction(modaldata)} htmlFor="user_confrimation_modal" className="btn bg-red-600  text-white">Yes</label>
                        <label onClick={closemodal}  className="btn bg-green-600">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserConfrimationModal;