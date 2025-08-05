import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  providerRequestStart,
  createProfileSuccess,
  providerRequestFailure,
} from '../../store/slices/providerSlice';
import axios from 'axios';
import { BuildingStorefrontIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { PROVIDER_API_URL } from '../../utils/constant';
import { toast } from 'react-toastify';

const ProviderSetup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.provider);

    const [formData, setFormData] = useState({
        businessName: '',
        bio: '',
        serviceLocations: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.businessName || !formData.serviceLocations) {
            return toast.error("Business Name and Service Locations are required.");
        }
        
        dispatch(providerRequestStart()); // Dispatch start action

        const locationsArray = formData.serviceLocations.split(',').map(loc => loc.trim()).filter(Boolean);
        const profileData = { ...formData, serviceLocations: locationsArray };

        try {
            const response = await axios.post(`${PROVIDER_API_URL}`, profileData, {
                withCredentials: true,
            });

            dispatch(createProfileSuccess(response.data)); // Dispatch success action
            toast.success("Your provider profile has been created! It's now pending admin review.");
            navigate('/provider-dashboard');
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
            dispatch(providerRequestFailure(errorMessage)); // Dispatch failure action
            toast.error(errorMessage);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-2xl">
                <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome, Provider!</h1>
                        <p className="mt-2 text-gray-600">Let's set up your public profile so customers can find you.</p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        {/* Business Name Input */}
                        <div>
                            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
                            <div className="relative mt-1">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><BuildingStorefrontIcon className="h-5 w-5 text-gray-400" /></div>
                                <input id="businessName" name="businessName" type="text" required value={formData.businessName} onChange={handleChange} className="block w-full rounded-md border-gray-300 py-3 pl-10 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="e.g., Varanasi Plumbing Pros" />
                            </div>
                        </div>

                        {/* Bio Textarea */}
                        <div>
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">About / Bio</label>
                            <div className="mt-1"><textarea id="bio" name="bio" rows={4} value={formData.bio} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Tell customers about your experience..."></textarea></div>
                        </div>

                        {/* Service Locations Input */}
                        <div>
                            <label htmlFor="serviceLocations" className="block text-sm font-medium text-gray-700">Service Locations</label>
                             <div className="relative mt-1">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><MapPinIcon className="h-5 w-5 text-gray-400" /></div>
                                <input id="serviceLocations" name="serviceLocations" type="text" required value={formData.serviceLocations} onChange={handleChange} className="block w-full rounded-md border-gray-300 py-3 pl-10 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="e.g., Lanka, Sigra, Cantt" />
                            </div>
                            <p className="mt-2 text-xs text-gray-500">Enter areas you service, separated by commas.</p>
                        </div>
                        
                        <div>
                            <button type="submit" disabled={isLoading} className="w-full flex justify-center rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 disabled:bg-gray-400">
                                {isLoading ? 'Creating Profile...' : 'Complete Setup & Go to Dashboard'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProviderSetup;