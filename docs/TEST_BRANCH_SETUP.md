# Test Branch & Vercel Deployment Setup Guide

## Overview
This guide will help you set up a complete testing environment using the `test` branch and Vercel for automatic preview deployments.

## Current Setup Status
✅ **Test branch created**: `test` branch is ready  
✅ **Vercel configuration**: `vercel.json` added for optimized deployment  
✅ **Local changes**: Test modifications committed to demonstrate workflow  

## Next Steps: Vercel Setup

### 1. Fix GitHub Authentication Issue
Before setting up Vercel, you need to resolve the GitHub push permission issue:

**Problem**: Currently using `anjan-poonacha-k-m_sap` account but repository belongs to `VishalThimmaiah`

**Solutions**:
- **Option A**: Switch to the correct GitHub account (`VishalThimmaiah`)
- **Option B**: Add `anjan-poonacha-k-m_sap` as a collaborator to the repository
- **Option C**: Fork the repository to your current account

### 2. Push Test Branch to GitHub
Once authentication is fixed:
```bash
# Push the test branch to GitHub
git push origin test
```

### 3. Set Up Vercel Deployment

#### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Connect your GitHub account to Vercel

#### Step 2: Import Your Project
1. Click "New Project" in Vercel dashboard
2. Import `VishalThimmaiah/vishalthimmaiah.com` repository
3. Vercel will automatically detect it's a Next.js project

#### Step 3: Configure Deployment Settings
1. **Framework Preset**: Next.js (auto-detected)
2. **Build Command**: `pnpm build` (from vercel.json)
3. **Install Command**: `pnpm install` (from vercel.json)
4. **Output Directory**: `.next` (default)

#### Step 4: Set Environment Variables
Add these environment variables in Vercel dashboard:
- `GMAIL_USER`: Your Gmail address
- `GMAIL_APP_PASSWORD`: Your Gmail app password

#### Step 5: Deploy
1. Click "Deploy" to create your first deployment
2. Vercel will deploy your `main` branch as production
3. All other branches (including `test`) will get preview deployments

## How the Workflow Works

### Branch Structure
```
main (production) ← Your live site: vishalthimmaiah.com
  ↑
test (testing) ← Preview deployments: unique URLs for each push
```

### Development Workflow
1. **Work on test branch**:
   ```bash
   git checkout test
   # Make your changes
   git add .
   git commit -m "Add new feature"
   git push origin test
   ```

2. **Automatic deployment**: Vercel automatically creates a preview deployment

3. **Test your changes**: Visit the preview URL to test

4. **Merge when ready**:
   ```bash
   git checkout main
   git merge test
   git push origin main
   ```

5. **Production update**: Your live site gets updated automatically

## Vercel Features You'll Get

### Automatic Deployments
- **Production**: Every push to `main` updates your live site
- **Preview**: Every push to `test` creates a unique preview URL
- **Comments**: Add comments and feedback directly on preview deployments

### Performance Monitoring
- **Core Web Vitals**: Automatic performance monitoring
- **Analytics**: Visitor analytics and performance insights
- **Edge Network**: Global CDN for fast loading

### Collaboration Features
- **Preview URLs**: Easy sharing with clients/stakeholders
- **Git Integration**: Seamless GitHub integration
- **Rollback**: Easy rollback to previous deployments

## Example URLs After Setup
- **Production**: `https://vishalthimmaiah.com`
- **Test Preview**: `https://vish-portfolio-git-test-vishalthimmaiah.vercel.app`
- **Specific Commit**: `https://vish-portfolio-75e854d-vishalthimmaiah.vercel.app`

## Testing the Setup

### 1. Make a Test Change
```bash
# On test branch
echo "console.log('Test deployment working!');" >> src/app/page.tsx
git add .
git commit -m "Test: Add console log for deployment verification"
git push origin test
```

### 2. Check Vercel Dashboard
- New deployment should appear automatically
- Click on the deployment to get the preview URL
- Test the preview URL to verify changes

### 3. Verify Production Safety
- Your main branch and live site remain unchanged
- Only the test preview shows your changes

## Troubleshooting

### Common Issues
1. **Build Failures**: Check Vercel build logs for errors
2. **Environment Variables**: Ensure Gmail credentials are set correctly
3. **Domain Issues**: Verify custom domain configuration if using one

### Getting Help
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **GitHub Integration**: [vercel.com/docs/git](https://vercel.com/docs/git)

## Benefits of This Setup

### For Development
- **Safe Testing**: Test changes without affecting live site
- **Fast Feedback**: Instant preview deployments
- **Easy Rollback**: Git-based version control

### For Collaboration
- **Client Reviews**: Share preview URLs for feedback
- **Stakeholder Approval**: Test features before going live
- **Team Collaboration**: Multiple developers can work safely

### For Production
- **Zero Downtime**: Seamless deployments
- **Automatic Optimization**: Vercel handles performance optimization
- **Global Distribution**: Fast loading worldwide

## Next Actions Required

1. **Fix GitHub authentication** (choose one of the options above)
2. **Push test branch**: `git push origin test`
3. **Set up Vercel account** and import project
4. **Configure environment variables**
5. **Test the workflow** with a sample change

Once these steps are complete, you'll have a professional testing environment that automatically deploys every change to your test branch while keeping your production site safe and stable.
