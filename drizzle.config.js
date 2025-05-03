/*** @type {import("drizzle-kit").Config} */
export default{
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_8DfXOSmR2GeQ@ep-dry-shape-a4ykchas.us-east-1.aws.neon.tech/video-ai?sslmode=require',

    }
};