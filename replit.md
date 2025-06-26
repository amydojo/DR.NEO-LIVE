# Dr. Neo Hair Restoration Website

## Overview

This is a modern, premium hair restoration website for Dr. Neo, built with a full-stack TypeScript architecture using React, Express, and PostgreSQL. The application features Apple-inspired design elements, advanced animations, and AI-powered image generation capabilities for medical visualizations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **Animations**: Framer Motion for premium animations and transitions
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite with custom configuration for multi-environment support

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Session-based with connect-pg-simple
- **Email Service**: SendGrid integration for contact form submissions
- **AI Integration**: OpenAI DALL-E 3 for medical image generation

### Design System
- **Primary Colors**: Yellow (#FAE151), Brown (#625046), Gold (#A87B23)
- **Typography**: Inter font family with premium Apple-style presentation
- **Components**: Custom shadcn/ui implementation with medical industry theming
- **Animations**: Custom CSS animations with intersection observer triggers

## Key Components

### Page Structure
- **Home Page**: Multi-section landing page with hero, treatments, testimonials, and contact
- **FUE Page**: Dedicated Follicular Unit Extraction treatment information
- **Treatments Page**: Comprehensive treatment catalog with detailed modals
- **VIP Membership**: Premium membership program presentation
- **Component Export**: Design system export tool for Figma integration

### Medical Treatment Sections
- FUE Hair Transplant (primary offering)
- Microneedling therapy
- Growth Factors (PRP) treatment
- Follicular Hypersomes™ regenerative therapy
- VIP membership program

### Interactive Features
- Responsive image carousels for testimonials
- Smooth scroll navigation between sections
- Contact form with multi-step validation
- FAQ accordion with rich text content
- Mobile-optimized touch interactions

## Data Flow

### Client-Server Communication
1. React frontend makes API calls to Express backend
2. Form submissions processed through validated endpoints
3. Email notifications sent via SendGrid service
4. Database operations handled through Drizzle ORM
5. AI image generation triggered on-demand

### State Management
- React Query manages server state and caching
- Local component state for UI interactions
- Form state managed by React Hook Form with Zod validation
- Animation states controlled by Framer Motion

### Content Management
- Static content managed through TypeScript interfaces
- Medical images served from assets directory
- AI-generated medical visualizations cached and optimized
- Responsive image loading with lazy loading implementation

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **@sendgrid/mail**: Email service integration
- **@anthropic-ai/sdk**: AI service integration
- **@modelcontextprotocol/sdk**: Design tool integration
- **drizzle-orm**: Database ORM and migrations

### UI Dependencies
- **@radix-ui/***: Headless UI components for accessibility
- **framer-motion**: Animation library
- **@tailwindcss/vite**: CSS framework integration
- **class-variance-authority**: Component variant management

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Production build optimization
- **vite**: Development server and build tool

## Deployment Strategy

### Environment Configuration
- **Development**: Local development with Vite dev server on port 5000
- **Production**: Node.js server with pre-built static assets
- **Database**: PostgreSQL with connection pooling
- **CDN**: Static assets served through Vite build process

### Build Process
1. Vite builds frontend assets to `dist/public`
2. esbuild bundles server code to `dist/index.js`
3. Database migrations run via `drizzle-kit push`
4. Environment variables loaded from `.env`

### Hosting Requirements
- Node.js 20+ runtime environment
- PostgreSQL 16+ database instance
- Environment variables for API keys and database connection
- Static file serving capability

## Changelog
- June 25, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.