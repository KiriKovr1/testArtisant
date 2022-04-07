export type Product = {
    product_id: Number,
    name: String,
    description: String,
    quantity: Number,
    initial_price: Number,
    type: String,
    avatar: {
        original: String,
        compressed: String,
    },
    other_file: {
        original: String,
    },
    additional_photos: [
        {
            original: String,
            compressed: String
        },
        {
            original: String,
            compressed: String
        },
        {
            original: String,
            compressed: String
        }
    ],
    created_by: {
        user_id: Number,
        display_name: String,
        public_address: String,
        custom_url: String,
        image: {
            original: String,
            compressed: String
        }
    },
    json_nft_data: {
        name: String,
        image: String,
        attributes: [
            {
                value: String,
                trait_type: String
            }
        ],
        description: String,
        external_url: String
    },
    json_nft_link: String,
    tx_status: String,
    created_at: String,
    updated_at: String,
    quantity_nfts_created: Number,
    on_main_page: Boolean,
    is_wearable: Boolean,
    latest_price: String,
    quantity_available: Number
}


export type Store = {
    state: {
        products: Array<Product>
        filtered: boolean
    },
    getProducts: (data: Array<Product>) => void
    updateFilter: () => void
}



 