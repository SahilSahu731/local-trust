import Provider from "../models/provider.model.js";


export const createProviderProfile = async (req, res) => {
  try {
    const { businessName, bio, serviceLocations } = req.body;

    // Get the user ID from the middleware
    const userId = req.user._id;

    // 1. Check if a provider profile already exists for this user
    const providerExists = await Provider.findOne({ user: userId });
    if (providerExists) {
      return res.status(400).json({ message: 'Provider profile already exists for this user' });
    }
    
    // 2. Validate required fields
    if (!businessName || !serviceLocations || serviceLocations.length === 0) {
        return res.status(400).json({ message: 'Please provide a business name and service locations' });
    }

    // 3. Create the new provider profile
    const provider = new Provider({
      user: userId,
      businessName,
      bio,
      serviceLocations,
    });

    const createdProvider = await provider.save();

    // 4. Send a success response
    res.status(201).json(createdProvider);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};