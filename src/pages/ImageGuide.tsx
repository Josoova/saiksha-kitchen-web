import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Download, Eye, FileImage, FileSpreadsheet } from 'lucide-react';

const ImageGuide = () => {
  const pageImages = {
    homepage: {
      title: "Homepage Images",
      sections: [
        {
          sectionName: "Hero Carousel",
          images: [
            {
              name: "Hero Slide 1",
              currentFile: "Not specified (needs update)",
              recommendedSize: "1920px × 800px",
              format: "WebP/JPG",
              maxSize: "300KB",
              description: "Main hero banner image showcasing kitchen products"
            },
            {
              name: "Hero Slide 2",
              currentFile: "Not specified (needs update)",
              recommendedSize: "1920px × 800px", 
              format: "WebP/JPG",
              maxSize: "300KB",
              description: "Secondary hero banner for product showcase"
            }
          ]
        },
        {
          sectionName: "Featured Products",
          images: [
            {
              name: "Gas Stove Image",
              currentFile: "5f227410-172c-4090-be93-e8ba8cf0ed52.png",
              recommendedSize: "800px × 600px",
              format: "WebP/PNG",
              maxSize: "200KB",
              description: "Premium gas stove product showcase image"
            },
            {
              name: "Electric Kettle Image", 
              currentFile: "c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png",
              recommendedSize: "800px × 600px",
              format: "WebP/PNG", 
              maxSize: "200KB",
              description: "Modern electric kettle product image"
            }
          ]
        },
        {
          sectionName: "Factory Overview",
          images: [
            {
              name: "Factory Video Thumbnail",
              currentFile: "YouTube embed (dQw4w9WgXcQ)",
              recommendedSize: "1280px × 720px",
              format: "JPG",
              maxSize: "250KB",
              description: "Factory tour video thumbnail or cover image"
            }
          ]
        },
        {
          sectionName: "Our Story",
          images: [
            {
              name: "Factory Building",
              currentFile: "2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png",
              recommendedSize: "1200px × 800px",
              format: "WebP/JPG",
              maxSize: "300KB",
              description: "External view of manufacturing facility"
            }
          ]
        }
      ]
    },
    products: {
      title: "Products Page Images",
      sections: [
        {
          sectionName: "Page Header",
          images: [
            {
              name: "Products Hero Banner",
              currentFile: "4bc61102-1ca7-45f2-ad90-5f2078c505ca.png",
              recommendedSize: "1920px × 600px",
              format: "WebP/JPG",
              maxSize: "350KB",
              description: "Kitchen appliances collection hero image"
            }
          ]
        },
        {
          sectionName: "Gas Stove Products",
          images: [
            {
              name: "2 Burner Gas Stoves",
              currentFile: "Multiple product images from data/products.ts",
              recommendedSize: "600px × 600px",
              format: "WebP/PNG",
              maxSize: "150KB",
              description: "Individual 2-burner gas stove product images"
            },
            {
              name: "3 Burner Gas Stoves",
              currentFile: "Multiple product images from data/products.ts",
              recommendedSize: "600px × 600px",
              format: "WebP/PNG",
              maxSize: "150KB",
              description: "Individual 3-burner gas stove product images"
            },
            {
              name: "4 Burner Gas Stoves",
              currentFile: "Multiple product images from data/products.ts",
              recommendedSize: "600px × 600px",
              format: "WebP/PNG",
              maxSize: "150KB",
              description: "Individual 4-burner gas stove product images"
            }
          ]
        },
        {
          sectionName: "Kettle Products",
          images: [
            {
              name: "Electric Kettles",
              currentFile: "Multiple kettle images from data/products.ts",
              recommendedSize: "600px × 600px",
              format: "WebP/PNG",
              maxSize: "150KB",
              description: "Individual electric kettle product images"
            }
          ]
        }
      ]
    },
    about: {
      title: "About Page Images",
      sections: [
        {
          sectionName: "Team & Company",
          images: [
            {
              name: "Team Photos",
              currentFile: "Not specified (needs addition)",
              recommendedSize: "400px × 400px",
              format: "WebP/JPG",
              maxSize: "100KB",
              description: "Professional headshots of team members"
            },
            {
              name: "Office/Factory Images",
              currentFile: "Various factory images",
              recommendedSize: "1200px × 800px",
              format: "WebP/JPG",
              maxSize: "250KB",
              description: "Workplace and manufacturing facility photos"
            }
          ]
        }
      ]
    },
    contact: {
      title: "Contact Page Images",
      sections: [
        {
          sectionName: "Contact Header",
          images: [
            {
              name: "Contact Hero Image",
              currentFile: "Not specified (needs addition)",
              recommendedSize: "1920px × 400px",
              format: "WebP/JPG",
              maxSize: "200KB",
              description: "Professional contact/office environment image"
            }
          ]
        }
      ]
    },
    global: {
      title: "Global Images & Icons",
      sections: [
        {
          sectionName: "Brand Assets",
          images: [
            {
              name: "Company Logo",
              currentFile: "Not specified (needs addition)",
              recommendedSize: "200px × 80px",
              format: "PNG (transparent)",
              maxSize: "50KB",
              description: "Main company logo for header"
            },
            {
              name: "Favicon",
              currentFile: "favicon.ico",
              recommendedSize: "32px × 32px",
              format: "ICO/PNG",
              maxSize: "10KB",
              description: "Browser tab icon"
            }
          ]
        },
        {
          sectionName: "Certification Logos",
          images: [
            {
              name: "ISO 9001 Certificate",
              currentFile: "Not specified (needs addition)",
              recommendedSize: "150px × auto",
              format: "PNG (transparent)",
              maxSize: "30KB",
              description: "ISO 9001 certification logo"
            },
            {
              name: "BIS Certificate",
              currentFile: "Not specified (needs addition)",
              recommendedSize: "150px × auto",
              format: "PNG (transparent)",
              maxSize: "30KB",
              description: "Bureau of Indian Standards logo"
            }
          ]
        },
        {
          sectionName: "OEM Client Logos",
          images: [
            {
              name: "Client Company Logos",
              currentFile: "Multiple client logos (needs specification)",
              recommendedSize: "200px × auto",
              format: "PNG (transparent)",
              maxSize: "50KB each",
              description: "Partner company logos for testimonials"
            }
          ]
        }
      ]
    }
  };

  const optimizationTips = [
    {
      title: "Format Selection",
      tip: "Use WebP for modern browsers (90% smaller than PNG), fallback to JPG/PNG"
    },
    {
      title: "Compression",
      tip: "Compress images using tools like TinyPNG or Squoosh.app before upload"
    },
    {
      title: "Responsive Images",
      tip: "Provide multiple sizes for different screen resolutions (1x, 2x, 3x)"
    },
    {
      title: "Lazy Loading",
      tip: "Implement lazy loading for images below the fold to improve page speed"
    },
    {
      title: "Alt Text",
      tip: "Always include descriptive alt text for accessibility and SEO"
    },
    {
      title: "CDN Usage",
      tip: "Consider using a CDN for faster image delivery worldwide"
    }
  ];

  const downloadCSV = () => {
    const csvData = [];
    
    // Add header row
    csvData.push(['Page', 'Section', 'Image Name', 'Current File', 'Recommended Size', 'Format', 'Max Size', 'Description']);
    
    // Add data rows
    Object.entries(pageImages).forEach(([pageKey, page]) => {
      page.sections.forEach(section => {
        section.images.forEach(image => {
          csvData.push([
            page.title,
            section.sectionName,
            image.name,
            image.currentFile,
            image.recommendedSize,
            image.format,
            image.maxSize,
            image.description
          ]);
        });
      });
    });

    // Convert to CSV string
    const csvContent = csvData.map(row => 
      row.map(field => `"${field.replace(/"/g, '""')}"`).join(',')
    ).join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'saiksha-website-image-specifications.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-green/20 to-brand-gold/20 rounded-full mb-4">
            <Camera className="inline-block w-5 h-5 mr-2 text-brand-green" />
            <span className="font-semibold text-brand-green">Image Specifications</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-green to-brand-gold bg-clip-text text-transparent">
            Website Image Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Complete specification guide for all images used across the Saiksha Kitchen Appliances website
          </p>

          {/* Download CSV Button */}
          <div className="flex justify-center mb-6">
            <Button 
              onClick={downloadCSV}
              className="bg-gradient-to-r from-brand-green to-brand-gold hover:from-brand-green/90 hover:to-brand-gold/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              <FileSpreadsheet className="w-5 h-5" />
              Download Excel File (CSV)
            </Button>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-brand-gold mx-auto"></div>
        </div>

        {/* Page-wise Image Breakdown */}
        <Tabs defaultValue="homepage" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="homepage">Homepage</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="global">Global</TabsTrigger>
          </TabsList>

          {Object.entries(pageImages).map(([key, page]) => (
            <TabsContent key={key} value={key}>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileImage className="mr-2 h-6 w-6 text-brand-green" />
                    {page.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {page.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="text-xl font-semibold mb-4 text-brand-green">
                          {section.sectionName}
                        </h3>
                        <div className="grid gap-4">
                          {section.images.map((image, imageIndex) => (
                            <Card key={imageIndex} className="border-l-4 border-l-brand-gold">
                              <CardContent className="p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-semibold text-lg mb-2">{image.name}</h4>
                                    <p className="text-gray-600 mb-3">{image.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                      <Badge variant="secondary">{image.format}</Badge>
                                      <Badge variant="outline">Max: {image.maxSize}</Badge>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="font-medium">Current File:</span>
                                      <span className="text-sm text-gray-600">{image.currentFile}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="font-medium">Recommended Size:</span>
                                      <span className="text-sm font-mono">{image.recommendedSize}</span>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Optimization Tips */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="mr-2 h-6 w-6 text-brand-gold" />
              Image Optimization Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {optimizationTips.map((tip, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-brand-green mb-2">{tip.title}</h4>
                  <p className="text-gray-700 text-sm">{tip.tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Technical Specifications Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-brand-green/5 rounded-lg">
                <h4 className="font-bold text-2xl text-brand-green">WebP</h4>
                <p className="text-gray-600">Preferred Format</p>
              </div>
              <div className="text-center p-4 bg-brand-gold/5 rounded-lg">
                <h4 className="font-bold text-2xl text-brand-gold">72 DPI</h4>
                <p className="text-gray-600">Minimum Resolution</p>
              </div>
              <div className="text-center p-4 bg-brand-green/5 rounded-lg">
                <h4 className="font-bold text-2xl text-brand-green">sRGB</h4>
                <p className="text-gray-600">Color Profile</p>
              </div>
              <div className="text-center p-4 bg-brand-gold/5 rounded-lg">
                <h4 className="font-bold text-2xl text-brand-gold">500KB</h4>
                <p className="text-gray-600">Max Desktop Size</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-brand-green to-brand-gold p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help with Image Optimization?</h3>
            <p className="mb-6">Contact our development team for assistance with image preparation and optimization.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white text-brand-green px-4 py-2">
                <Download className="w-4 h-4 mr-1" />
                Batch Processing Available
              </Badge>
              <Badge className="bg-white text-brand-green px-4 py-2">
                <Camera className="w-4 h-4 mr-1" />
                Professional Photography
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGuide;
